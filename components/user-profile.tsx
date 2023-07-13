import Image from "next/image"
import { DrupalNode } from "next-drupal"
import useSWR from 'swr'
import { UserCardProject } from "components/user-card-projects"
import React from 'react'
import Link from 'next/link'
import { BoxProjectList } from "./box-project-alluserlist"

import { absoluteURL, formatDate } from "lib/utils"
import { UserListCard } from "components/card-user-profile"

interface UserProfileProps {
  node: DrupalNode
}

const fetcher = (url) => fetch(url).then((r) => r.json());

export function UserProfile({ node, ...props }: UserProfileProps) {

  const [openTab, setOpenTab] = React.useState(1);


  const { data: userprojects, error: userprojectsError } = useSWR(() => 'https://fed.septembre.io/user-s-projects-rest/' + node.id, fetcher)



  return (
    <>
      <div className="bg-white rounded-lg">
        <div {...props}>
          <div className="flex">
            {node.user_picture ? (
              <div className="overflow-hidden h-10 w-10 rounded-full mt-3 ml-5">
                <Link href={node.name.replace(/è/g, 'e').replaceAll(' ', '-')} passHref>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.user_picture?.uri.url}`}
                    width={16}
                    height={16}
                    layout="responsive"
                    objectFit="cover"
                    alt={node.drupal_internal__uid}
                  />
                </Link>
              </div>
            ) : (
              <div className="overflow-hidden h-10 w-10 rounded-full mt-3 ml-5">
                <div className="md:grid-cols-1">
                  <Link href={node.name.replace(/è/g, 'e').replaceAll(' ', '-')} passHref>
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            )}
            <div className="ml-3 mt-3 grid xs:grid-cols-1 sm:grid-rows-2 sm:grid-flow-col gap-2">
              {node.field_nom_affiche >= 0 ? (
                <Link href={node.name.replace(/è/g, 'e').replaceAll(' ', '-')} passHref>
                  <p className="text-xl font-semibold">
                    {node.display_name}
                  </p>
                </Link>
              ) : (
                node.field_nom_affiche
              )}
              {node.field_nom_affiche >= 0 ? (
                <Link href={node.name.replace(/è/g, 'e').replaceAll(' ', '-')} passHref>
                  <div className="text-slate-500 lowercase relative -top-3 text-sm max-w-xs truncate">
                    app.federage.com/{node.name.replace(/è/g, 'e').replaceAll(' ', '-')}
                  </div>
                </Link>
              ) : (
                node.field_nom_affiche
              )}
            </div>
          </div>
          <div className="mb-4 text-gray-600">
            {node.field_description?.processed && (
              <div
                dangerouslySetInnerHTML={{ __html: node.field_description?.processed }}
                className="leading-normal ml-2 pb-5 text-slate-600 text-base sm:text-base lg:text-lg px-4"
              />
            )}
          </div>
          <UserListCard key={node.id} node={node} />
          {userprojects?.length ? (
            <p>
              {userprojects.map((sesprojets, index) => (
                <UserCardProject key={sesprojets.uuid} node={sesprojets} />
              ))}
            </p>
          ) : (
            <>
              {/* <Link href="/register" passHref>
                <a >
                  <div className="inline-block px-3 py-1 fedblue text-white transition-colors rounded-xl text-sm text-center font-semibold lg:py-2 bg-secondary hover:bg-white hover:text-black border-secondary">
                    Proposer une collaboration
                  </div>
                </a>
              </Link> */}
            </>
          )}
        </div>
      </div>
      <ul className="flex mt-5">
        <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
          <a
            className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 1 ? "fedblueblue" : "text-" + "bg-white")}
            onClick={e => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            Tous
          </a>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
          <a
            className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 2 ? "fedblueblue" + "" : "text-" + "bg-white")}
            onClick={e => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            Projets
          </a>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
          <a
            className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 3 ? "fedblueblue" + "" : "text-" + "bg-white")}
            onClick={e => {
              e.preventDefault();
              setOpenTab(3);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            Partenaires
          </a>
        </li>
      </ul>
      <BoxProjectList key={node.id} node={node} />
    </>

  )
}
