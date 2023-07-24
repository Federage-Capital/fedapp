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
  const colored = "bg-white fedblueblue";



  return (
    <>
      <div className="relative w-full flex flex-col items-start justify-start text-left text-base text-gray-700 font-text-xs-leading-4-font-medium">
        <div className="self-stretch bg-white flex flex-row items-start justify-start border-b-[2px] border-solid border-whitesmoke-400">
          <div className="flex flex-row p-4 items-center justify-start">
            <img
              className="rounded-xl w-10 h-10 object-cover"
              alt=""
              src="/avatar11@2x.png"
            />
          </div>
          <div className="flex-1 h-[72px] flex flex-row py-0 pr-4 pl-0 box-border items-center justify-start gap-[16px]">
            <div className="self-stretch flex-1 flex flex-row py-[9px] px-0 items-center justify-start">
              <b className="flex-1 relative leading-[24px]">William BALDIÈRE</b>
            </div>
            <div className="rounded-2xl bg-mediumblue-100 shadow-[0px_0px_0px_2px_#012bdd,_0px_0px_0px_4px_#fff] overflow-hidden flex flex-row p-1 items-center justify-center border-[1px] border-solid border-mediumblue-100">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/bell1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col py-6 px-4 items-center justify-start gap-[12px] text-xl text-gray-900">
          <div className="self-stretch flex flex-row items-start justify-between">
            <div className="self-stretch w-[304px] flex flex-row items-start justify-start gap-[12px]">
              <img
                className="rounded-[24.02px] w-12 h-12 object-cover"
                alt=""
                src="/avatar8@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[2px]">
                    <b className="relative leading-[32px]">Open Food Facts</b>
                    <div className="flex-1 flex flex-row py-0 px-0.5 items-center justify-center">
                      <img
                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                        alt=""
                        src="/shield-check1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[4px] mt-[-4px] text-base text-mediumblue-100">
                  <div className="relative leading-[24px] font-semibold">
                    Site officiel
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/external-link.svg"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-3xs bg-gray-100 w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/dots-vertical.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base text-gray-500">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
              <div className="self-stretch flex flex-col py-0 pr-0 pl-[0.720428466796875px] items-start justify-start">
                <div className="self-stretch relative leading-[20px] font-medium">
                  Association développant une base de données libre et ouverte sur
                  les produits alimentaires qui sont commercialisés...
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px] text-mediumblue-100">
                <div className="relative leading-[20.03px] font-semibold">
                  Lire plus
                </div>
                <img className="relative w-2.5 h-1.5" alt="" src="/icon3.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-whitesmoke-100 flex flex-row pt-8 px-4 pb-12 items-start justify-start text-center text-[11.28px] text-dimgray">
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="rounded-lg bg-white flex flex-col py-1.5 px-[15px] items-center justify-center text-mediumblue-200">
                <b className="relative leading-[18.8px]">Tous</b>
              </div>
              <b className="relative leading-[18.8px]">Annonces</b>
              <b className="relative leading-[18.8px]">Partenaires</b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-left text-xl text-gray-900">
              <div className="self-stretch rounded-lg bg-white flex flex-col p-4 items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[22px]">
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="relative w-[84px] h-6">
                        <img
                          className="absolute top-[-2px] left-[58px] rounded-xl w-7 h-7 overflow-hidden object-cover"
                          alt=""
                          src="/avatar4@2x.png"
                        />
                        <img
                          className="absolute top-[-2px] left-[38px] rounded-xl w-7 h-7 overflow-hidden object-cover"
                          alt=""
                          src="/avatar5@2x.png"
                        />
                        <img
                          className="absolute top-[-2px] left-[18px] rounded-xl w-7 h-7 overflow-hidden object-cover"
                          alt=""
                          src="/avatar6@2x.png"
                        />
                        <img
                          className="absolute top-[-2px] left-[-2px] rounded-xl w-7 h-7 overflow-hidden object-cover"
                          alt=""
                          src="/avatar7@2x.png"
                        />
                      </div>
                      <div className="rounded-10xs bg-indigo-50" />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 relative leading-[20px] font-semibold">
                        Solution pour le développement de nutriments actifs
                        anti-cancérigènes
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[10px] text-base text-black">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch h-14 flex flex-col items-center justify-end">
                          <div className="self-stretch relative leading-[20px] font-semibold">
                            Recherche un procédé agro-alimentaire pour
                            expérimenter des solutions nutritionnelles médicales.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-dimgray">
                      <div className="self-stretch relative leading-[20px] font-semibold">
                        210 000€ • 18 apports
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between text-sm text-mediumblue-100">
                  <div className="relative leading-[20.03px] font-semibold">
                    Détails de l’apport
                  </div>
                  <img className="relative w-2.5 h-1.5" alt="" src="/icon3.svg" />
                </div>
                <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-2.5 px-[18px] items-center justify-center text-center text-base text-white">
                  <button className="flex-1 relative leading-[20px] font-semibold">
                    Contribuer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white rounded-lg">
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
          {node.field_description?.processed && (
            <div
              dangerouslySetInnerHTML={{ __html: node.field_description?.processed }}
              className="leading-normal ml-2 text-slate-600 text-base sm:text-base lg:text-lg px-4"
            />
          )}
          <UserListCard key={node.id} node={node} />
          {userprojects?.length ? (
            <p>
              {userprojects.map((sesprojets, index) => (
                <UserCardProject key={sesprojets.uuid} node={sesprojets} />
              ))}
            </p>
          ) : null}
        </div>
      </div>
      <ul className="flex mt-5 pt-5 pb-5">
        <li className="-mb-px mr-2 last:mr-0 flex-left text-center">
          <a
            className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 1 ? colored : "text-" + "bg-white")}
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
            className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 2 ? colored : "text-" + "bg-white")}
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
            className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 3 ? colored : "text-" + "bg-white")}
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
      <BoxProjectList key={node.id} node={node} /> */}
    </>

  )
}
