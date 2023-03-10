import { DrupalBlock } from "next-drupal"
import Link from "next/link"
import { MediaImage } from "./media--image"

interface BlockBannerProps {
  block: DrupalBlock
}

export function BlockBanner({ block }: BlockBannerProps) {
  return (
    <div className="">

      <MediaImage media={block.field_media_image} priority />
      <div className="max-w-screen-2xl mx-auto container bg-white p-10 ">


          {block.body && (

            <div
                                     dangerouslySetInnerHTML={{ __html: block.body?.value }}
                                     className="prose prose-lg border-l-4 pl-5 border-orange-500 prose-indigo mx-auto mt-6 "
                                   />


          )}


          {block.field_content_link && (
            <div className="prose prose-lg  prose-indigo mx-auto mt-6 ">
            <Link
              href={block.field_content_link.uri.replace("internal:", "")}
              passHref
            >
              <a className="px-6 py-3 mx-auto text-xl  transition-colors border-2 rounded-md bg-secondary hover:bg-white hover:text-black border-secondary">
                {block.field_content_link.title}
              </a>
            </Link>
            </div>
          )}

        </div>
      </div>

  )
}
