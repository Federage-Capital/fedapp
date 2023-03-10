import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { DrupalBlock, DrupalTaxonomyTerm } from "next-drupal"

import { drupal } from "lib/drupal"
import { getParams } from "lib/get-params"
import { LayoutProps } from "components/layout"

type GlobalElements = LayoutProps

// This is a helper function to fetch global elements for layout.
// This is going to be run for every pages on build.
// To make this fast, you could cache the results example on Redis.
export async function getGlobalElements(
  context: GetStaticPropsContext | GetServerSidePropsContext
): Promise<GlobalElements> {
  const menuOpts = {
    params: getParams("menu_link_content--menu_link_content").getQueryObject(),
    locale: context.locale,
    defaultLocale: context.defaultLocale,
  }

  // Fetch menu items.
  const mainMenu = await drupal.getMenu("main", menuOpts)
  const standardMenu = await drupal.getMenu("standard", menuOpts)
  const footerMenu = await drupal.getMenu("footer", menuOpts)

  // Fetch recipes collections view.
  // Fetch recipes collections view.

  // Fetch the footer promo block.
  // You would normally use drupal.getResource() here to fetch the block by uuid.
  // We're using getResourceCollection and a filter here because this demo needs
  // to work on any Umami demo. UUIDs are different for every Umami install.


  // Fetch the disclaimer block.
  // See comment above on why we use drupal.getResourceCollectionFromContext
  // instead of drupal.getResource.

  return {
    ...(await serverSideTranslations(context.locale, ["common"])),
    menus: {
      main: mainMenu.items,
      standard: standardMenu.items,
    },

  }
}
