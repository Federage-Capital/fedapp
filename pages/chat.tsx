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
import { useState, useEffect, useRef  } from "react";


import Image, { ImageProps } from "next/image"

import { Fragment } from 'react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { formatDate } from "lib/utils"


import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { contactFormSchema } from "../validations/chat"
import { ChatContactList } from "components/chat--contact-list"
import { ChatTextArea } from "components/chat--text-area"



import { ChatContent } from "components/chat--content"



interface ChatPageProps extends LayoutProps {
  user: DrupalUser[];
  node: DrupalNode[];

}







export default function ChatsPage({
  users,
  actualuser,
  node,
  menus,

  blocks,

  ...props
}: ChatPageProps) {



  const { t } = useTranslation();
  const router = useRouter();

  const { data: session, status } = useSession()

  const { data } = useSession()












  return (
    <div className="bg-slate-100">
      <Layout meta={{ title: t("Chat") }} menus={menus} blocks={blocks}>






{actualuser?.length ? (
        <>
                                {actualuser.map((node,index) => (

      <>
                                  {users.map((user,index) => (

      <>

  <div key={user.uid}>


                                                                    <ChatContent key={node.uid} node={node} user={user}/>


</div>

</>

                                                                          ))}



            </>

                                ))}
                              </>
                            ) : (
  <p className="text-2xl cadre text-center p-20 mb-10">
You have no friends
  </p>
)}




      </Layout>

    </div >
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<ChatPageProps>> {
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








  // Fetch user info
  const users = await drupal.getResourceCollectionFromContext<DrupalUser[]>(
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
          "user_picture",
        ])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])

        .getQueryObject(),
      withAuth: session.accessToken,
    }
  );

  // Fetch user info

  // Fetch user info
  const actualuser = await drupal.getResourceCollectionFromContext<DrupalUser[]>(
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



  return {
    props: {
      ...(await getGlobalElements(context)),

      users,
actualuser,
    },
  };
}
