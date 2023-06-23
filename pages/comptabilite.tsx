import * as React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { DrupalNode, DrupalUser } from "next-drupal";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { getSession, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { drupal } from "lib/drupal";
import { getGlobalElements } from "lib/get-global-elements";
import { Layout, LayoutProps } from "components/layout";
import { PageHeader } from "components/page-header";
import { NodeGroupRow } from "components/node--group--row"

import useSWR from 'swr'

import Modal from "../components/modal";
import Image, { ImageProps } from "next/image"
import { absoluteURL } from "lib/utils"

import { Fragment } from 'react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { formatDate } from "lib/utils"


interface AccountPageProps extends LayoutProps {
  user: DrupalUser[];
  node: DrupalNode[];
  objectFit,
  priority,
  financementsdansgr,
}


interface FormGroupfinProps extends React.HTMLProps<HTMLFormElement> { }

const fetcher = (url) => fetch(url).then((r) => r.json());


export default function AccountsPage({
  user,
  node,
  menus,
  article,
  objectFit,
  priority,
  financementsdansgr,
  membersdugroupe,
  filteredPerson1,
  className,
  ...props
}: AccountPageProps) {

  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)



  const { t } = useTranslation();
  const { data } = useSession();
  const router = useRouter();


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const { status } = useSession()
  const [openTab, setOpenTab] = React.useState(1);


  const { data: financements2dugroupe, error: financementError } = useSWR(() => `https://fed.septembre.io/group_node_financement_rest_nested_3` + `/` + user[0].id, fetcher)
  const { data: financementsd1groupe, error: financement1Error } = useSWR(() => `https://fed.septembre.io/group_node_financement_rest_nested_4` + `/` + user[0].id, fetcher)
  const { data: tableau, error: tableauError } = useSWR(() => `https://fed.septembre.io/group_node_financement_rest_nested_5` + `/` + user[0].id, fetcher)
  const { data: propositions, error: propositionsError } = useSWR(() => `https://fed.septembre.io/propositions_nested` + `/` + user[0].id, fetcher)
  const { data: totaldugroupe, error: totaldugroupeError } = useSWR(() => `https://fed.septembre.io/group_node_financement_rest_nested_6`, fetcher)
  const { data: totaldugroupeprop, error: totaldugroupepropError } = useSWR(() => `https://fed.septembre.io/group_node_financement_rest_nested_7`, fetcher)

  if (totaldugroupepropError) return <div>Failed to load total du groupe</div>
  if (!totaldugroupeprop) return <div>Loading  total du groupe ...</div>

  if (totaldugroupeError) return <div>Failed to load total du groupe</div>
  if (!totaldugroupe) return <div>Loading  total du groupe ...</div>

  if (propositionsError) return <div>Failed to propositionsError 23</div>
  if (!propositions) return <div>Loading Propositions ...</div>
  if (tableauError) return <div>Failed to load 23</div>
  if (!tableau) return <div>Loading financement ...</div>

  if (financement1Error) return <div>Failed to load 23</div>
  if (!financementsd1groupe) return <div>Loading financement ...</div>

  if (financementError) return <div>Failed to load 23</div>
  if (!financements2dugroupe) return <div>Loading financement ...</div>

  const getTotFin2 = (financements2dugroupe) => {
    let sum = 0
    for (let i = 0; i < financements2dugroupe.length; i++) {
      sum += financements2dugroupe[i].field_estimation_du_prix
    }
    return sum

  }








  return (
    <Layout
      menus={menus}
      meta={{
        title: t("Comptabilité"),
      }}
    >



      <div className="container" id="account">

        <div className="title">
          <div className="mb-4 py-3">
            <p>



              Comptabilité<br />
              Maximisez votre activité
            </p>
          </div>


        </div>





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
        destination: "/register",
        permanent: false,
      },
    };
  }

  const params = new DrupalJsonApiParams()
    .addInclude(["uid.user_picture"])
    .addSort("created", "ASC")

  const financementsdansgr = await drupal.getResourceCollection(
    "group--federage",
    {
      params: new DrupalJsonApiParams()
        .addInclude(["uid", "group_type", "revision_user"])
        .addFields("group_content--federage-group_node-financement", ["id", "type", "meta"])
        .addFields("group_type--group_type", ["id", "type", "meta"])

        .addFields("user--user", ["display_name", "user_picture"])

        .addSort("created", "DESC")
        .getQueryObject(),

      withAuth: session.accessToken,

    }

  )

  const membersdugroupe = await drupal.getResourceCollection(
    "group_content--federage-group_membership",
    {
      params: new DrupalJsonApiParams()
        .addInclude(["uid", "group_content_type", "gid", "entity_id", "group_roles"])


        .addFields("user--user", ["display_name", "user_picture"])
        .addFilter("entity_id.meta.drupal_internal__target_id", session.user.userId)

        .addSort("created", "DESC")
        .getQueryObject(),

      withAuth: session.accessToken,

    }

  )

  // Fetch user info
  const user = await drupal.getResourceCollectionFromContext<DrupalUser[]>(
    "user--user",
    context,
    {
      params: new DrupalJsonApiParams()
        .addInclude(["user_picture"])
        .addFields("user--user", [
          "display_name",
          "mail",
          "drupal_internal__uid",
          "field_description",
          "field_site_internet",
          "field_user_slogan",
          "user_picture",
        ])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])

        .addFilter("drupal_internal__uid", session.user.userId)
        .getQueryObject(),
      withAuth: session.accessToken,
    }
  );

  // Fetch user info




  return {
    props: {
      ...(await getGlobalElements(context)),
      financementsdansgr,
      membersdugroupe,
      user,
    },
  };
}
