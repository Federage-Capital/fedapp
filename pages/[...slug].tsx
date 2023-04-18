import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import { DrupalNode, DrupalUser, DrupalTaxonomyTerm } from "next-drupal"

import { PageProps } from "types"
import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { NodeArticle } from "components/node--article"
import { NodePage } from "components/node--page"
import { NodeFinancement } from "components/node--financement"
import { NodeGroupFinancement } from "components/node--groupfederage"
import { UserProfile } from "components/user-profile"




const RESOURCE_TYPES = [
  "node--page",
  "node--article",
  "node--financement",
  "group--federage",
  "user--user",
]

interface ResourcePageProps extends LayoutProps, PageProps {
  resource: DrupalNode | DrupalTaxonomyTerm
}

export default function ResourcePage({
  resource,
  additionalContent,
  menus,
}: ResourcePageProps) {
  if (!resource) return null

  return (
    <Layout
      menus={menus}
      meta={{
        title: resource.title || resource.name,
      }}
    >
      {resource.type === "node--page" && (
        <NodePage node={resource as DrupalNode} />
      )}
      {resource.type === "node--article" && (
        <NodeArticle
          node={resource as DrupalNode}

        />
      )}
      {resource.type === "group--federage" && (
        <NodeGroupFinancement
          node={resource as DrupalNode}

        />
      )}

      {resource.type === "user--user" && (
        <UserProfile
          node={resource as DrupalNode}

        />
      )}

      {resource.type === "node--financement" && (
        <NodeFinancement
          node={resource as DrupalNode}

        />
      )}


    </Layout>
  )
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  }
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<ResourcePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  // If path is not found or the resource is not one we care about,
  // return a 404.
  if (!path || !RESOURCE_TYPES.includes(path.jsonapi.resourceName)) {
    return {
      notFound: true,
    }
  }

  // Fetch the resource from Drupal.
  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params: getParams(path.jsonapi.resourceName)?.getQueryObject(),
    }
  )

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the resource is not published,
  // Return 404.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    }
  }

  // Fetch additional content for pages.
  let additionalContent: PageProps["additionalContent"] = {}

  if (resource.type === "node--article") {
    // Fetch featured articles.
    additionalContent["featuredArticles"] =
      await drupal.getResourceCollectionFromContext("node--article", context, {
        params: getParams("node--article")
          .addFilter("id", resource.id, "<>")
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }




  return {
    props: {
      ...(await getGlobalElements(context)),
      resource,
      additionalContent,
    },
    revalidate: 5,

  }
}
