import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import Image from "next/image"
import Link from "next/link"
import classNames from "classnames"
import { DrupalFile, DrupalMedia, DrupalNode, JsonApiErrors } from "next-drupal"
import { drupal } from "lib/drupal"
import { BlockBanner } from "components/block--banner"
import { DrupalParagraph } from "next-drupal"
import { Paragraph } from "components/paragraph"
import { getGlobalElements } from "lib/get-global-elements"
import { Meta, MetaProps } from "components/meta"
import { useTranslation } from "next-i18next"
import { absoluteURL, formatDate } from "lib/utils"
import cn from 'classnames'
import { getParams } from "lib/get-params"
import { DrupalTaxonomyTerm } from "next-drupal"
import { Layout, LayoutProps } from "components/layout"
import { NodeArticleTeaser } from "components/node--article--teaser"
import siteConfig from "site.config"

interface IndexPageProps {
  nodes: DrupalNode
    paragraph: DrupalParagraph
}



export default function IndexPage({ nodes, publication, menus, candidat, domaines, journee, vieducomite, blocks, banner,
 ...props}: IndexPageProps) {
  const { t } = useTranslation()

  return (
    <Layout meta={{ title: t("Comité d'histoire de la politique de la ville") }} menus={menus} blocks={blocks}>

    <BlockBanner block={banner} />

    <div class="max-w-screen-2xl mx-auto container p-10 inline-grid grid-cols-2 gap-4">

    <div>
PUBLICATION
    {publication?.length ? (

      publication.map((hpublication) => (
        <div key={hpublication.id}
    >


          <Link href={hpublication.path.alias} passHref>
            <a

            >


          {hpublication.field_media_image && (
            <figure className="text-center">
              <Image
                src={absoluteURL(
                  hpublication.field_media_image.field_media_image.uri.url
                )}
                alt={
                  hpublication.field_media_image.field_media_image.resourceIdObjMeta.alt
                }
                width={500}
                height={300}
                class="mx-auto"
                objectFit="cover"
              />
            </figure>
          )}

      <span className="prose prose-lg border-l-4 pl-5 border-orange-500 prose-indigo mx-auto mt-6">
        {hpublication.title}
      </span>

      {hpublication.body?.summary && (
        <div
          dangerouslySetInnerHTML={{ __html: hpublication.body?.summary }}
          className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500"
        />
      )}

      </a>
    </Link>
            </div>
      ))
    ) : (
      <p className="py-4"></p>
    )}
    </div>



    <div>

    AGENDA




              {nodes?.length ? (

                nodes.map((node) => (


                      <li key={node.id} className="flex py-4 divide-y divide-gray-200">

                      {node.field_paragraphs?.length ? (
                                 <div className="w-1/4">
                                   {node.field_paragraphs.map((paragraphe) => (
                                       <p key= {paragraphe.id} className="w-100">



                                       <p className="text-sm font-medium text-gray-900">    {formatDate(paragraphe.field_d.value)} - {formatDate(paragraphe.field_d.end_value)}
</p>



                                       </p>
                                   ))}
                                 </div>
                               ) : null}
                              <div className="ml-3">
                              {node.field_paragraphs?.length ? (
                                         <div className="w-100">
                                           {node.field_paragraphs.map((paragraphe) => (
                                               <p key= {paragraphe.id} className="w-100">

                                                 <p className="text-sm font-medium text-gray-900">       {paragraphe.field_lieu}</p>
                                               </p>
                                           ))}
                                         </div>
                                       ) : null}

                                <p className="text-sm font-medium text-gray-900">{node.title}</p>
                              </div>



                      </li>
                ))

              ) : (
                <p className="py-4"></p>

              )}


    </div>

    </div>




    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {vieducomite.map((vie, actionIdx) => (
            <div
              key={vie.id}
              className={classNames(

                'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
              )}
            >
              <div>

              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {vie.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {vie.description}
                    Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
                  quo et molestiae.
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>


        <BlockBanner block={journee} />

domaines d'intervention

            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                  {domaines.map((domaine, actionIdx) => (
                    <div
                      key={domaine.id}
                      className={classNames(

                        'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                      )}
                    >
                      <div>

                      </div>
                      <div className="mt-8">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                          <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {domaine.name}
                          </a>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          {domaine.description}
                            Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
                          quo et molestiae.
                        </p>
                      </div>
                      <span
                        className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                        aria-hidden="true"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>






    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: {
          "filter[field_categorie.id]": "112a43c1-e84d-4a06-ad88-1a87cb6979df",
        include: "field_media_image.field_media_image,uid,field_paragraphs",
        sort: "-created",
      },
    }
  )

  const publication = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: {
          "filter[promote]": 1,
          "filter[field_categorie.id]": "49efc8d7-2996-4289-8a82-d8be54279996",
        include: "field_media_image.field_media_image,uid,field_paragraphs",
        sort: "-created",
      },
    }
  )
  const nodes2 = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: {
        "filter[promote]": 1,
        "filter[status]": 1,
        include: "field_media_image.field_media_image,uid,field_paragraphs",
        sort: "-created",
      },
    }
  )


  const vieducomite = await drupal.getResourceCollectionFromContext<DrupalTaxonomyTerm[]>(
    "taxonomy_term--vie_du_comite",
    context,
    {
      params: {

        include: "field_media_image.field_media_image",

      },
    }
  )

  const domaines = await drupal.getResourceCollectionFromContext<DrupalTaxonomyTerm[]>(
    "taxonomy_term--domaines_d_intervention",
    context,
    {
      params: {


      },
    }
  )



  const [banner] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
    "block_content--basic",
    context,
    {
      params: getParams("block_content--basic")
      .addInclude(["field_media_image.field_media_image"])

        .addFilter("info", "Heading-home")
        .addPageLimit(1)
        .getQueryObject(),
    }
  )

  const [candidat] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
    "block_content--basic",
    context,
    {
      params: getParams("block_content--basic")
      .addInclude(["field_media_image.field_media_image"])

        .addFilter("info", "Appel à projets / Contribution")
        .addPageLimit(1)
        .getQueryObject(),
    }
  )

  const [journee] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
    "block_content--basic",
    context,
    {
      params: getParams("block_content--basic")
      .addInclude(["field_media_image.field_media_image"])

        .addFilter("info", "Appel à projets / Contribution")
        .addPageLimit(1)
        .getQueryObject(),
    }
  )

  return {
    props: {
      ...(await getGlobalElements(context)),
      banner,
      candidat,
      publication,
      nodes,
      domaines,
      vieducomite,
      journee,
    },
  }
}
