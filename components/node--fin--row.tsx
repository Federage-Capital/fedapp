import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Link from "next/link";

import { formatDate } from "lib/utils"

interface NodeArticleRowProps {
  node: DrupalNode,

}

export function NodeArticleRow({ node, groupe, filteredPerson1, ...props }: NodeArticleRowProps) {
  const { t } = useTranslation()
  const router = useRouter()

  async function handleDelete() {
    if (!window?.confirm(t("are-you-use-you-want-to-delete-this-article"))) {
      return
    }

    const response = await fetch(`/api/publish/groupfin/${node.id}`, {
      method: "DELETE",
    })

    if (response?.ok) {
      router.reload()
    }
  }

  async function handlePublish() {
    if (!window?.confirm(t("are-you-use-you-want-to-publish-this-article"))) {
      return
    }

    const response = await fetch(`/api/publish/groupfin/${node.id}`, {
      method: "PUT",

        })

    if (response?.ok) {
      router.reload()
    }
  }




  return (
    <article
      className="relative grid grid-cols-[120px_1fr] items-start gap-4 p-4 overflow-hidden bg-red border border-border group"
      {...props}
    >
      <div className="flex items-start justify-between text-text">
        <div>

        {node.moderation_state == 'published' &&
                <h2>
                <Link href={node.path.alias} passHref>

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
                </h2>




        }




        {node.moderation_state == 'draft' &&
                <h2>
draft




<button
  onClick={() => handlePublish()}
  className="px-2 py-1 text-white redbutton rounded-md hover:bg-error bg-error/80"
>
  {t("publish")}
</button>







                </h2>




        }






          <p className="text-sm text-gray">
          </p>


        </div>

        <Link href={`/groupfederage/edit?gid=${encodeURIComponent(node.id)}`}>
<a className="px-2 py-1 fedblue text-white rounded-md text-center hover:bg-error bg-error/80">


Modifier

</a>
</Link>
        <button
          onClick={() => handleDelete()}
          className="px-2 py-1 text-white redbutton rounded-md hover:bg-error bg-error/80"
        >
          {t("delete")}
        </button>
      </div>
    </article>
  )
}
