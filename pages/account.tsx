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
import { NodeGroupfederageRow } from "components/node--groupfederage--row";

import useModal from "../hooks/useModal";
import Modal from "../components/modal";
import Image, { ImageProps } from "next/image"
import { absoluteURL } from "lib/utils"
import { MediaImage } from "components/media--image"
import { ChartDemo } from "components/chartdemo";

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { formatDate } from "lib/utils"


interface AccountPageProps extends LayoutProps {
  articles: DrupalNode[];
  user: DrupalNode[];
  node: DrupalNode;
}



export default function AccountsPage({
financementsdansgr,

  user,
  node,
  menus,
  blocks,
  media,
  objectFit,
  priority,
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
  const [logo, setLogo] = React.useState(
    user[0]?.user_picture?.uri
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

  // Handling the logo change
  const handleLogo = (e) => {
    setLogo(e.target.value);
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


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const { status } = useSession()
  const [openTab, setOpenTab] = React.useState(1);


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
          user_picture: [{ url: logo }],
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


  async function handleDelete() {
    if (!window?.confirm(t("are-you-use-you-want-to-delete-this-article"))) {
      return
    }

    const response = await fetch(`/api/group/projets_federage/${financementsdansgr.id}`, {
      method: "DELETE",
    })

    if (response?.ok) {
      router.reload()
    }
  }

  return (
    <Layout
      menus={menus}
      blocks={blocks}
      meta={{
        title: t("portefeuille"),
      }}
    >
      <PageHeader
        heading={t("Portefeuille")}
        breadcrumbs={[
          {
            title: t("Portefeuille"),
          },
        ]}
      ></PageHeader>
      <div className="container" id="account">



        <div className="title">
          <div className="mb-4 px-5 py-3">

          <Listbox>
               {({ open }) => (
                 <>
                   <Listbox.Label className="sr-only"> Change published status </Listbox.Label>
                   <div className="relative">
                     <div className="inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
                       <div className="inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
                         <div className="inline-flex items-center rounded-l-md border border-transparent  py-2 pl-3 pr-4  shadow-sm">



                          {user[0].user_picture && (
                            <h2>


                              <Image
                                src={absoluteURL(user[0].user_picture.uri.url)}
                                objectFit={objectFit}
                                alt={user[0].user_picture.resourceIdObjMeta.alt || "Image"}
                                title={user[0].user_picture.resourceIdObjMeta.title}
                                priority={priority}
                                width={70}
                                height={70}
                                class='rounded-full'
                              />
                            </h2>
                          )}
                          <p>{user[0].display_name}</p>

                         </div>
                         <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md  p-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                           <span className="sr-only">Change published status</span>
                           <ChevronDownIcon className="h-5 w-5 text-black" aria-hidden="true" />
                         </Listbox.Button>
                       </div>
                     </div>

                     <Transition
                       show={open}
                       as={Fragment}
                       leave="transition ease-in duration-100"
                       leaveFrom="opacity-100"
                       leaveTo="opacity-0"
                     >
                       <Listbox.Options className="absolute left-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                           <Listbox.Option

                           >
                           <ul class="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-0">

                           <li class="text-gray-900 cursor-default select-none p-4 text-sm" id="listbox-option-0" role="option">
                                  <div class="flex flex-col">
                                    <div class="flex justify-between">


                                    </div>
                                    <p class="text-gray-500 mt-2"><button className="modal-toggle" onClick={toggleUserDataForm}>
                                      <u>Edit profile</u>
                                    </button></p>
                                  </div>
                                </li>
                                <li class="text-gray-900 cursor-default select-none p-4 text-sm" id="listbox-option-0" role="option">
                                       <div class="flex flex-col">
                                         <div class="flex justify-between">

                                         </div>
                                         <p class="text-gray-500 mt-2">
                                                     <button
                                                       className="modal-toggle text-underline mr-4"
                                                       onClick={togglePasswordForm}
                                                     >
                                                       <u>Edit password</u>
                                                     </button></p>
                                       </div>
                                     </li>
                                 </ul>
                           </Listbox.Option>

                       </Listbox.Options>
                     </Transition>
                   </div>
                 </>
               )}
             </Listbox>

             <p className="text-lg mt-10">
             <Link href="/groupfederage/new" passHref>
             <a className="px-3 py-1 fedbutton text-white transition-colors rounded-xl text-base lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                + Nouveau financement
               </a>
             </Link>
             </p>

          </div>




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
                Add your logo

                <input
                  placeholder="Add your logo"
                  type="file"
                  id="image"
                  name="image"
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

        <div className="flex flex-wrap">
                <div className="w-full">
                <span
                  className="px-5 py-3"
                >  Opérations</span>
                  <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
                  >
                    <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
                      <a
                        className={
                          "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                          (openTab === 1
                            ? "bg-" + "-900"
                            : "text-" + "-600 bg-white")
                        }
                        onClick={e => {
                          e.preventDefault();
                          setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                      >
                        En cours
                      </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
                      <a
                        className={
                          "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                          (openTab === 2
                            ? "bg-" + "-900"
                            : "text-" + "-600 bg-white")
                        }
                        onClick={e => {
                          e.preventDefault();
                          setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                      >
Demandes
                      </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
                      <a
                        className={
                          "text-xs font-bold  px-5 py-3 rounded-md leading-normal " +
                          (openTab === 3
                            ? "bg-" + "-900"
                            : "text-" + "-600 bg-white")
                        }
                        onClick={e => {
                          e.preventDefault();
                          setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                      >
                         Historique
                      </a>
                    </li>
                  </ul>
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
                    <div className="px-4 py-5 flex-auto">
                      <div className="tab-content tab-space">
                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                          <p>

{financementsdansgr?.length ? (
  <div className="">

  <h3 className="mb-2 text-lg font-black text-gray-400 text-left">ACTIFS</h3>
                      {financementsdansgr.map((grfinancement) => (


                               <li key={grfinancement.id}>

                               <div
                                 className="relative grid grid-cols-[120px_1fr] items-start gap-4 p-4 overflow-hidden bg-red border border-border group"

                               >
                                 <div className="flex items-start justify-between text-text">
                                   <div>
                                     <p className="text-sm text-gray">
                                     </p>
                                   </div>
<Link href={grfinancement.path.alias} passHref>
<a className="flex-1 text-xl">
<h2>{grfinancement.label}</h2>

</a>
</Link>


                                   Créé le  : {formatDate(grfinancement.created)} -{" "}
                                   Modifié le :  {formatDate(grfinancement.changed)} -{" "}

                        les membres
                                   <button
                                     onClick={() => handleDelete()}
                                     className="px-2 py-1 text-white redbutton rounded-md hover:bg-error bg-error/80"
                                   >
                                     {t("delete")}
                                   </button>
                                 </div>
                               </div>

                               </li>

                             ))}
                             </div>
                           ) : (
                             <p className="text-2xl cadre text-center p-20 mb-10">
                               <p className="inline-block">  <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 17H25H13ZM19 11V23V11ZM1 25V5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H17L21 5H33C34.0609 5 35.0783 5.42143 35.8284 6.17157C36.5786 6.92172 37 7.93913 37 9V25C37 26.0609 36.5786 27.0783 35.8284 27.8284C35.0783 28.5786 34.0609 29 33 29H5C3.93913 29 2.92172 28.5786 2.17157 27.8284C1.42143 27.0783 1 26.0609 1 25Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>

                             <p>  Aucun projet</p>
                                   <p>   Commencez par créer un projet</p>
                             <Link href="/groupfederage/new" passHref>
                             <a className="px-3 py-1 cadre text-white transition-colors rounded-xl lg:text-xl lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                            + démarrez un projet
                               </a>
                             </Link>
                             </p>
                           )}

                          </p>

                          <ChartDemo />
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                          <p>


                          </p>
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                          <p>




                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
        destination: "/login",
        permanent: false,
      },
    };
  }

  const params = new DrupalJsonApiParams()
      .addInclude(["uid.user_picture"])
      .addSort("created", "ASC")

      const financementsdansgr = await drupal.getResourceCollection<DrupalNode[]>(
        "group--federage",
        {
          params: new DrupalJsonApiParams()
            .addInclude(["uid", "group_type", "revision_user"])
            .addFields("group_content--federage-group_node-financement", ["id", "type","meta"])
            .addFields("group_type--group_type", ["id", "type","meta"])

            .addFields("user--user", ["display_name", "user_picture"])

            .addSort("created", "DESC")
            .getQueryObject(),

          withAuth: session.accessToken,

        }

      )

  // Fetch user info
  const user = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
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
      financementsdansgr,

      user,
    },
  };
}
