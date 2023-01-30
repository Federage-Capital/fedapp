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

import useSWR from 'swr'

import useModal from "../hooks/useModal";
import Modal from "../components/modal";
import Image, { ImageProps } from "next/image"
import { absoluteURL } from "lib/utils"

import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { formatDate } from "lib/utils"


interface AccountPageProps extends LayoutProps {
  user: DrupalUser[];
  node: DrupalNode[];
  objectFit,
  priority,
  financementsdansgr,
}

const fetcher = (url) => fetch(url).then((r) => r.json());


export default function AccountsPage({
  user,
  node,
  menus,
  objectFit,
  priority,
  financementsdansgr,
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




  const { data: financements2dugroupe, error: financementError } = useSWR(() =>`https://fed.septembre.io/group_node_financement_rest_nested_3`+ `/`+ user[0].id, fetcher)
  if (financementError) return <div>Failed to load 23</div>
  if (!financements2dugroupe) return <div>Loading financement ...</div>


const getTotFin2 = (financements2dugroupe) => {
        let sum = 0
        for (let i = 0; i < financements2dugroupe.length; i++) {
          sum += financements2dugroupe[i].field_estimation_du_prix
        }
        return sum

      }



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
      meta={{
        title: t("portefeuille"),
      }}
    >
      <PageHeader
      heading={t("Mon-portefeuille")}
        breadcrumbs={[
          {
            title: t("Portefeuille"),
          },
        ]}
      ></PageHeader>



      <div className="container" id="account">

        <div className="title">
          <div className="mb-4 py-3">
<div className="grid grid-cols-4 gap-4">
          <Listbox>
               {({ open }) => (
                 <>
                   <Listbox.Label className="sr-only"> Change published status </Listbox.Label>
                   <div className="relative">
                     <div className="inline-flex rounded-md shadow-sm">
                       <div className="inline-flex rounded-md shadow-sm">
                         <div className="inline-flex items-center rounded-l-md border border-transparent   pr-4  shadow-sm">



                          {user[0].user_picture && (


                              <Image
                                src={absoluteURL(user[0].user_picture.uri.url)}
                                objectFit={objectFit}
                                alt={user[0].user_picture.resourceIdObjMeta.alt || "Image"}
                                title={user[0].user_picture.resourceIdObjMeta.title}
                                priority={priority}
                                width={130}
                                height={130}
                                className='rounded-lg'
                              />

                          )}
                          <p className="ml-5 text-xl">{user[0].display_name}</p>

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
                       <Listbox.Options className="absolute left-0 z-10 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">



                           <li className="text-gray-900 cursor-default select-none p-4 " id="listbox-option-0" role="option">
                                    <button className="modal-toggle" onClick={toggleUserDataForm}>
                                      <u>Edit profile</u>
                                    </button>


                                </li>
                                <li className="text-gray-900 cursor-default select-none p-4" id="listbox-option-0" role="option">
                                                     <button
                                                       className="modal-toggle text-underline mr-4"
                                                       onClick={togglePasswordForm}
                                                     >
                                                       <u>Edit password</u>
                                                     </button>

                                     </li>


                       </Listbox.Options>
                     </Transition>
                   </div>
                 </>
               )}
             </Listbox>

             <div className="text-base font-medium">
             Portefeuille<br/>

             <span className="font-semibold text-2xl">  {getTotFin2(financements2dugroupe)} €</span>
             </div>

          </div>

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




          <p className="text-lg mt-10">
          <Link href="/groupfederage/new" passHref>
          <a className="px-3 py-1 fedbutton text-white transition-colors rounded-xl text-base lg:px-4 lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
             + Nouveau financement
            </a>
          </Link>
          </p>

        </div>

        <div className="flex flex-wrap">
                <div className="w-full">
                <br/>
                <span
                  className="px-5 py-3 mt-4 text-xl font-semibold"
                >  Opérations
<br/><br/>
                </span>
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

  <div>



  <h3 className="mb-2 text-lg font-black text-gray-400 text-left">ACTIFS</h3>


                      {financementsdansgr.map((grfinancement) => (


   <li key={grfinancement.id} className="grid grid-cols-6 gap-4">

   <hr className="col-span-6 my-10"/>
   <div>
   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M17 21.0714H23M11 25.3571V14.6429C11 14.0745 11.2107 13.5295 11.5858 13.1276C11.9609 12.7258 12.4696 12.5 13 12.5H19L21 14.6429H27C27.5304 14.6429 28.0391 14.8686 28.4142 15.2705C28.7893 15.6723 29 16.2174 29 16.7857V25.3571C29 25.9255 28.7893 26.4705 28.4142 26.8724C28.0391 27.2742 27.5304 27.5 27 27.5H13C12.4696 27.5 11.9609 27.2742 11.5858 26.8724C11.2107 26.4705 11 25.9255 11 25.3571Z" stroke="#012BDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
   <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#D1D5DB" stroke-width="2.5" stroke-dasharray="5 5"/>
   </svg>
   </div>

                            <div className="col-span-4">

                            <Link href={grfinancement.path.alias} passHref>
                            <a>
<h2 className="text-sm gray-700">{grfinancement.label}</h2><br/>

<span className="text-2xl font-semibold">
{financements2dugroupe?.length ? (
           <div>

           {financements2dugroupe.filter(person5 => person5.uuid.includes(grfinancement.id)).map(filteredPerson5 => {

              return (

                <div className="flex-container card" key={filteredPerson5.uuid}>

                  <div className="content">
                     {filteredPerson5.field_estimation_du_prix} €
                    <div>

       </div>
                  </div>


              </div>)
            })}



           </div>
         ) : (
           <p >

00000 €

</p>


         )}




</span>
</a>
</Link>

                          </div>

  <div className="col-span-1">
  <Link href={grfinancement.path.alias} passHref>
<a>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 ml-2"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
</a>
  </Link>
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
<p>
<br/><br/><br/>
                          </p>
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

      const financementsdansgr = await drupal.getResourceCollection(
        "group--federage",
        {
          params: new DrupalJsonApiParams()
            .addInclude(["uid", "group_type", "revision_user"])
            .addFields("group_content--federage-group_node-financement", ["id", "type","meta"])
            .addFields("group_type--group_type", ["id", "type","meta"])

            .addFields("user--user", ["display_name", "user_picture"])
            .addFilter("uid.meta.drupal_internal__target_id", session.user.userId)

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
      user,
    },
  };
}
