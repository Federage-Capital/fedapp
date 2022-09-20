import * as React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { DrupalNode } from "next-drupal";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { getSession, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { drupal } from "lib/drupal";
import { getGlobalElements } from "lib/get-global-elements";
import { Layout, LayoutProps } from "components/layout";
import { PageHeader } from "components/page-header";
import { NodeArticleRow } from "components/node--article--row";
import useModal from "../hooks/useModal";
import Modal from "../components/modal";

interface AccountPageProps extends LayoutProps {
  articles: DrupalNode[];
  user: DrupalNode[];
  node: DrupalNode;
}

export default function AccountsPage({
  articles,
  user,
  node,
  menus,
  blocks,
}: AccountPageProps) {
  const { t } = useTranslation();
  const { data } = useSession();
  const router = useRouter();
  const { isShowing, toggle } = useModal();
  const { isShowing: isPasswordFormShowed, toggle: togglePasswordForm } =
    useModal();
  const { isShowing: isUserDataFormShowed, toggle: toggleUserDataForm } =
    useModal();
  const [name, setName] = React.useState(user[0]?.display_name);
  const [email, setEmail] = React.useState(user[0]?.mail);
  const [description, setDescription] = React.useState(
    user[0]?.field_description?.value
  );
  const [slogan, setSlogan] = React.useState(user[0]?.field_user_slogan);
  const [website, setWebsite] = React.useState(
    user[0]?.field_site_internet?.uri
  );
  const [password, setPassword] = React.useState("");
  const [newpassword, setNewPassword] = React.useState("");

  // Handling the name changee
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the description change
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  // Handling the email change
  const handleWebsite = (e) => {
    setWebsite(e.target.value);
  };

  // Handling the email change
  const handleSlogan = (e) => {
    setSlogan(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the password change
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  async function editUser() {
    const basicAuthCredential = user[0].display_name + ":" + password;
    const bace64 = Buffer.from(basicAuthCredential).toString("base64");
    const response = await fetch(
      `https://fed.septembre.io/user/${user[0].drupal_internal__uid}?_format=json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          name: [
            {
              value: name,
            },
          ],
          mail: [
            {
              value: email,
            },
          ],
          field_description: [
            {
              value: description,
            },
          ],
          field_site_internet: [{ uri: website }],
          field_user_slogan: [
            {
              value: slogan,
            },
          ],
          pass: [
            {
              existing: password,
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
      // alert("Acount changed. Please login again with your new credentials.");
      // signOut();
      if (user[0].mail !== email) {
        alert(
          "Email changed. Please login again with your new credentials."
        );
        signOut();
        router.push("/login");
      } else {
        confirm("Account updated!")
        router.push("/account");
      }
    }
  }

  // Handling the form submission + fetch data + update state
  const handleSubmitData = (e) => {
    e.preventDefault();
    editUser();
  };

  async function editPassword() {
    const basicAuthCredential = user[0].display_name + ":" + password;
    const bace64 = Buffer.from(basicAuthCredential).toString("base64");
    const response = await fetch(
      `https://fed.septembre.io/user/${user[0].drupal_internal__uid}?_format=json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          pass: [
            {
              existing: password,
              value: newpassword,
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
      alert("Password changed. Please login again with your new credentials.");
      signOut();
      router.push("/login");
    }
  }

  // Handling the form submission + fetch data + update state
  const handleSubmitPassword = (e) => {
    e.preventDefault();
    editPassword();
  };

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
      ></PageHeader>
      <div className="container" id="account">
        <div className="title">
          <h1>Welcome {user[0].display_name}</h1>
          <div className="mb-4">
            <button
              className="modal-toggle text-underline mr-4"
              onClick={togglePasswordForm}
            >
              <u>Edit password</u>
            </button>
            <button className="modal-toggle" onClick={toggleUserDataForm}>
              <u>Edit profile</u>
            </button>
          </div>

          <h2>
            <b>Email: </b>
            {user[0].mail}
          </h2>
          {user[0].field_user_slogan && (
            <h2>
              <b>Slogan: </b>
              {user[0].field_user_slogan}
            </h2>
          )}
          {user[0].field_site_internet && (
            <h2>
              <b>Website: </b>
              {user[0].field_site_internet.uri}
            </h2>
          )}
          {user[0].field_description?.value && (
            <>
              <h2>
                <b>Description: </b>
              </h2>
              <p
                className="description"
                dangerouslySetInnerHTML={{
                  __html: user[0].field_description.value,
                }}
              ></p>
            </>
          )}
        </div>
        <div className="actions">
          <Modal
            isShowing={isPasswordFormShowed}
            hide={togglePasswordForm}
            title="Modify password"
          >
            <form onSubmit={handleSubmitPassword}>
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder="Current password"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={newpassword}
                  onChange={handleNewPassword}
                  placeholder="New password"
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Register" />
              </div>
            </form>
          </Modal>
          <Modal
            isShowing={isUserDataFormShowed}
            hide={toggleUserDataForm}
            title="Edit your profile"
          >
            <form onSubmit={handleSubmitData}>
              <div className="form-group">
                <p>Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={handleName}
                  required
                />
              </div>
              <div className="form-group">
                Email
                <input
                  type="text"
                  value={email}
                  onChange={handleEmail}
                  required
                />
              </div>
              <div className="form-group">
                Website
                <input
                  placeholder="Add your website"
                  type="text"
                  value={website}
                  onChange={handleWebsite}
                />
              </div>
              <div className="form-group">
                Description
                <textarea
                  placeholder="Add your description"
                  value={description?.replace(/<[^>]+>/g, "")}
                  onChange={handleDescription}
                />
              </div>
              <div className="form-group">
                Slogan
                <input
                  placeholder="Add your slogan"
                  type="text"
                  value={slogan}
                  onChange={handleSlogan}
                />
              </div>
              <div className="mt-4">
                <p>
                  <i>Type your password to register your modifications</i>
                </p>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Current password"
                  value={password}
                  onChange={handlePassword}
                  required
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Register" />
              </div>
            </form>
          </Modal>
        </div>
        <div className="articles">
          <h1>Your articles</h1>
          <Link href="/articles/new" passHref>
            <a className="px-3 py-0.5 d-flex align-center font-serif text-lg text-center text-white transition-colors border-2 rounded-md lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
              Create an article
            </a>
          </Link>
        </div>
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
      <style jsx global>{`
        .title {
          display: flex;
          flex-direction: column;
          align-items: left;
          padding-bottom: 30px;
          width: 60%;
        }
        .articles {
          width: 60%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        .title > h1,
        .articles {
          font-size: 30px;
          font-family: Scope One, ui-serif, Georgia, Cambria, "Times New Roman",
            Times, serif;
        }
        .actions {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          margin-top: 5px;
        }
      `}</style>
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
          "field_description",
          "field_site_internet",
          "field_user_slogan",
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
      user,
    },
  };
}
