import Link from "next/link"
import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import { absoluteURL, formatDate } from "lib/utils"
import Image from "next/image"

import { MediaImage } from "components/media--image"

interface NodeArticleCardProps {
  node: DrupalNode
}

export function NodeArticleCard({ node, ...props }: NodeArticleCardProps) {
  const { t } = useTranslation()

  return (
    <article
      className="relative flex flex-col p-4 space-y-4 overflow-hidden bg-white group"
      {...props}
    >

          <div class="relative overflow-hidden bg-no-repeat bg-cover">
          {node.field_image && (
            <figure>
              <Image
                src={absoluteURL(node.field_image.uri.url)}
                width={768}
                height={500}
                layout="responsive"
                objectFit="cover"
                alt={node.field_image.resourceIdObjMeta.alt}
                priority
              />
              {node.field_image.resourceIdObjMeta.title && (
                <figcaption className="py-2 text-sm text-center text-gray-600">
                  {node.field_image.resourceIdObjMeta.title}
                </figcaption>
              )}
            </figure>
          )}
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-70 transition duration-300 ease-in-out bg-green-700">
        <h2 className="flex-1 text-2xl">{node.title}</h2>

  <Link href={node.path.alias} passHref>
          <a className="inline-flex items-center uppercase hover:underline text-link">
            {t("view-article")}
            <svg
              className="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </Link>

        </div>

        </div>





    </article>
  )
}
