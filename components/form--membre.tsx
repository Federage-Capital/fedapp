import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import useSWR from 'swr'


interface FormMembreProps extends React.HTMLProps<HTMLFormElement> {}

interface FormMembre {
  users: DrupalUsers,

}
interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export function FormMembre({ className, ...props }: FormArticleProps) {
  const router = useRouter()
  const query = router.query;




     const { data: users, error } = useSWR('https://fed.septembre.io/jsonapi/user/user', fetcher)


  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()


       if (error) return <div>Failed to load</div>
       if (!users) return <div>Loading...</div>

  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch("/api/membre", {
      method: "POST",
      body: data,
    })

    if (!response.ok) {
      const errors = await response.json()

      return setFormStatus({
        status: "error",
        message: errors?.map((error) => error.detail),
      })
    }

    router.push("/account")

  }

  return (
    <form
      className={classNames("grid gap-4", className)}
      onSubmit={onSubmit}
      {...props}
    >
      {(formStatus?.status === "success" || formStatus?.status === "error") && (
        <div
          className={classNames("py-3 px-4 border", {
            "border-link bg-link/10 text-link": formStatus.status === "success",
            "border-error bg-error/10 text-error":
              formStatus.status === "error",
          })}
        >
          {Array.isArray(formStatus.message) ? (
            <ul className="list-disc list-inside list">
              {formStatus.message.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          ) : (
            formStatus.message
          )}
        </div>
      )}

      PARTENAIRES DE L’OPÉRATION


             <div className="grid gap-2">


                      <label
                      htmlFor="select_users"
                      className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                      >
Select users                      </label>
                      <select
                      id="select_users"
                      name="select_users"
                      className="rounded-md border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
                    >
     {users.data.map((user) => (

<option value={user.id}>{user.attributes.display_name}</option>

                          ))}
                      </select>




                  </div>




      <div className="grid gap-2">
        <label htmlFor="gid" className="font-semibold text-text">
          {t("gid_du_groupe")} <span className="text-sm text-red-500">*</span>
        </label>

        <textarea
          id="gid"
          name="gid"
          value={query.gid}
          maxLength={255}
        ></textarea>
      </div>
      <div className="grid gap-2">



        <label
        htmlFor="group_roles"
        className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
        >
      Select role                      </label>
        <select
        id="group_roles"
        name="group_roles"
        className="rounded-md border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
      >


      <option value="cc53f225-d358-4450-b510-014ca01e24a4">Aucun</option>
      <option value="d264867e-ce6e-4586-a7db-4152e84a98a3">Federage Admin</option>
      <option value="c1a07b8f-d277-4f79-8c28-d577ea7ad979">Federage Membre</option>

        </select>





      </div>



      <div>
        <input
          type="submit"
          className="px-6 py-3 text-xl text-white transition-colors border-2 rounded-sm cursor-pointer bg-link hover:bg-white hover:text-black border-link"
          disabled={formStatus?.status === "fetching"}
          value={
            formStatus?.status === "fetching"
              ? t("please-wait")
              : t("create-article")
          }
        />
      </div>
    </form>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<FormMembreProps>> {

const users = await drupal.getResourceCollection("user--user")


return {
  props: {
    users,

  },
  revalidate: 60,
}
}
