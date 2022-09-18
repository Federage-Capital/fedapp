import { NextApiRequest, NextApiResponse } from "next";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { DrupalNode } from "next-drupal";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { drupal } from "lib/drupal";
import { getGlobalElements } from "lib/get-global-elements";
import { Layout, LayoutProps } from "components/layout";
import { PageHeader } from "components/page-header";
import { NodeArticleRow } from "components/node--article--row";
import { User } from "next-auth";
import jwt_decode from "jwt-decode";

interface AccountPageProps extends LayoutProps {
  articles: DrupalNode[];
  user: DrupalNode[];
  node: DrupalNode;
}

export default function AccountsPage({
  articles,
  financements,
  user,
  node,
  menus,
  blocks,
}: AccountPageProps) {
  const { t } = useTranslation();
  const { data } = useSession();
  const router = useRouter();

  async function handleEdit() {
    const basicAuthCredential = user[0].display_name + ":" + "mathias_admin";
    const bace64 = Buffer.from(basicAuthCredential).toString("base64");
    const response = await fetch(
      `https://fed.septembre.io/user/17?_format=json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          name: [
            {
              value: "mytest",
            },
          ],
        }),
        headers: {
          "Content-Type": "application/json",
          "access-control-allow-origin": "http://localhost:3000/",
          "X-CSRF-Token": "TVHi0LZf6AXgAyai_vqE_z-eyJfrpm9G2io3v186vLo",
          Authorization: `Basic ${bace64}`,
        },
      }
    );

    if (response?.ok) {
      router.reload();
    }
  }

  return (
    <Layout
      menus={menus}
      blocks={blocks}
      meta={{
        title: t("my-account"),
      }}
    >
      <PageHeader
        heading={t("my-account")}
        breadcrumbs={[
          {
            title: t("my-account"),
          },
        ]}
      >
        <Link href="/articles/new" passHref>
          <a className="px-3 py-1 fedblue text-white transition-colors rounded-xl lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
            New Article
          </a>
        </Link>
        <Link href="/financements/new" passHref>
        <a className="px-3 py-1 fedblue text-white transition-colors rounded-xl lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
            Nouveau financement
          </a>
        </Link>
      </PageHeader>
      <div className="container" id="account">
        <div>
          <h1>Bienvenue {user[0].display_name}</h1>
          <h2>{user[0].mail}</h2>
        </div>
        <button
          onClick={() => handleEdit()}
          className="px-2 py-1 text-black rounded-xl hover:bg-white bg-white/80"
        >
          Changer le nom du compte
        </button>
        {financements?.length ? (
          <div className="grid max-w-2xl gap-4 mx-auto">
            {financements.map((financement) => (
              <NodeArticleRow key={financement.id} node={financement} />
            ))}
          </div>
        ) : (
          <p className="font-serif text-2xl text-center text-text">
            {t("you-have-no-financements")}
          </p>
        )}

        {articles?.length ? (
          <div className="grid max-w-2xl gap-4 mx-auto">
            {articles.map((article) => (
              <NodeArticleRow key={article.id} node={article} />
            ))}
          </div>
        ) : (
          <p className="font-serif text-2xl text-center text-text">
            {t("you-have-no-articles")}
          </p>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<AccountPageProps>> {
  // Check if user is authenticated.
  const session = await getSession({ ctx: context });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Fetch all articles sorted by the user.
  const articles = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: new DrupalJsonApiParams()
        .addInclude(["field_media_image.field_media_image", "uid.user_picture"])
        .addFields("node--article", [
          "title",
          "path",
          "field_media_image",
          "status",
          "created",
          "uid",
        ])
        .addFilter("uid.meta.drupal_internal__target_id", session.user.userId)
        .addFields("media--image", ["field_media_image"])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])
        .addSort("created", "DESC")
        .getQueryObject(),
      withAuth: session.accessToken,
    }
  );


  // Fetch all financements sorted by the user.
  const financements = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--financement",
    context,
    {
      params: new DrupalJsonApiParams()
        .addInclude(["field_media_image.field_media_image", "uid.user_picture"])
        .addFields("node--article", [
          "title",
          "path",
          "field_media_image",
          "status",
          "created",
          "uid",
        ])
        .addFilter("uid.meta.drupal_internal__target_id", session.user.userId)
        .addFields("media--image", ["field_media_image"])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])
        .addSort("created", "DESC")
        .getQueryObject(),
      withAuth: session.accessToken,
    }
  );


  // Fetch user info
  const user = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "user--user",
    context,
    {
      params: new DrupalJsonApiParams()
        .addFields("user--user", [
          "display_name",
          "mail",
          "drupal_internal__uid",
        ])
        .addFilter("drupal_internal__uid", session.user.userId)
        .getQueryObject(),
      withAuth: session.accessToken,
    }
  );

  return {
    props: {
      ...(await getGlobalElements(context)),
      articles,
      financements,
      user,
    },
  };
}
