import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { drupal } from "lib/drupal"
import { DrupalUser } from "next-drupal"
import { getGlobalElements } from "lib/get-global-elements"

import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import useSWR from 'swr'


interface FormMembreProps extends React.HTMLProps<HTMLFormElement> {

  users: DrupalUser,
}



const fetcher = (url) => fetch(url).then((res) => res.json());

export function FormMembre({ className, ...props }: FormMembreProps) {
  const router = useRouter()
  const query = router.query;

  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  }


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

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-check m-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Javascript"
                                id="flexCheckDefault"
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                  Javascript
                              </label>
                            </div>
                            <div className="form-check m-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Python"
                                id="flexCheckDefault"
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                  Python
                              </label>
                            </div>
                            <div className="form-check m-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Java"
                                id="flexCheckDefault"
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                  Java
                              </label>
                            </div>
                            <div className="form-check m-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="PHP"
                                id="flexCheckDefault"
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                  PHP
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-check m-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="C#"
                                id="flexCheckDefault"
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                  C#
                              </label>
                            </div>
                            <div className="form-check m-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="C++"
                                id="flexCheckDefault"
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                  C++
                              </label>
                            </div>
                            <div className="form-check m-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="C"
                                id="flexCheckDefault"
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                  C
                              </label>
                            </div>
                            <div className="form-check m-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Typescript"
                                id="flexCheckDefault"
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                  Typescript
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="form-floating mt-3 mb-3 text-center">
                          <label htmlFor="exampleFormControlTextarea1">
                            You're proficient in the following languages :{" "}
                          </label>
                          <textarea
                            className="form-control text"
                            name="response"
                            value={userinfo.response}
                            placeholder="The checkbox values will be displayed here "
                            id="floatingTextarea2"
                            style={{ height: "150px" }}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                      <label
                      htmlFor="select_users"
                      className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                      >
Sélectionnez un membre                   </label>
                      <select
                      id="select_users"
                      name="select_users"
                      className="rounded-md border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
                    >
     {users.data.map((user) => (

<option key={user.id} value={user.id}>{user.attributes.display_name}</option>

                          ))}
                      </select>




                  </div>




      <div className="grid gap-2">
        <label htmlFor="gid" className="font-semibold hidden text-text">
          {t("gid_du_groupe")} <span className="text-sm text-red-500">*</span>
        </label>

        <textarea
          id="gid"
          name="gid"
          value={query.gid}
          maxLength={255}
          className="hidden"
        ></textarea>
      </div>
      <div className="grid gap-2">









      </div>



      <div>
        <input
          type="submit"
          className="px-6 py-3 text-xl text-white transition-colors border-2 rounded-sm cursor-pointer bg-link hover:bg-white hover:text-black border-link"
          disabled={formStatus?.status === "fetching"}
          value={
            formStatus?.status === "fetching"
              ? t("please-wait")
              : t("add-user")
          }
        />
      </div>
    </form>
  )
}
