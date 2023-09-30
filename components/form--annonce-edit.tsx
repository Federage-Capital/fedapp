import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { Folder } from "./foldersvg"
import { useState, useEffect, useRef } from "react";
import useSWR from 'swr'
import { absoluteURL, formatDate } from "lib/utils"
import { DatePicker } from "components/datepickercomp"
import { Dialog, Transition } from '@headlessui/react'

import { ImageInputAsync } from "components/imageinputasync"


interface FormAnnonceEditProps extends React.HTMLProps<HTMLFormElement> {}
const fetcher = (url) => fetch(url).then((r) => r.json());



export function FormAnnonceEdit({ className, node, fin, categorieprj, groupe, ...props }: FormAnnonceEditProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()
  const query = router.query;



   const [file, setFile] = useState()

   function handleChange(event) {
     setFile(event.target.files[0])
   }

     const ref = useRef();

       const reset = () => {
         ref.current.value = "";
       };



  const { data: revision, error: revisionError } = useSWR(() =>`https://fed.septembre.io/revision_history/`+ query.gid, fetcher)

  if (revisionError) return <div>Failed to load revision</div>
  if (!revision) return <div>Loading financement ...</div>

  const submitHandler = (e) => {
    const { id } = e.nativeEvent.submitter;

    switch (id) {
      case "submit1":
        return handlesubmit_task1(e);

      case "submit2":
        return handlesubmit_task2(e);

      default:
      // ignore
    }
  };



    const handlesubmit_task1 = async (event) => {
      event.preventDefault()
      const data = new FormData(event.target)



      setFormStatus({ status: "fetching" })

      const response = await fetch(`/api/annonce-edit/${node.id}`, {
        method: "PATCH",
        body:  data,
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


    function handlesubmit_task2(event) {
      event.preventDefault();
      const url = 'http://fed.septembre.io/uploadFile ';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      const response =  fetch(`https://fed.septembre.io/user/register?_format=json`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },

      })

      console.log("handler 2", formData);

    }



  return (

    <form
      className={classNames("grid gap-4", className)}
      onSubmit={submitHandler}
      {...props}
    >
    <div className="inline-block text-center text-sm text-slate-500"> En tant qu’initiateur, vous fixez les objectifs de l’opération.</div>

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

  !!!!!!!!!!!!!      {node.id}

        <div className="grid gap-2">

          <label htmlFor="title" className="font-semibold text-text">
            {t("title")} <span className="text-sm text-red-500">*</span>
          </label>

============ Print revision --------
          {revision
          .map((print_revision) => (
            <span key={print_revision.id} value={print_revision.id}>

                  {print_revision.title}
        {print_revision.title.revision_log}
        {print_revision.body_revision_id}

            </span>
            ))}
!============ Print revision --------


          <input
            id="title"
            name="title"
            maxLength={255}


            defaultValue={node.title}


            className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
          />


          <input
            id="gid"
            name="gid"
            maxLength={255}


            defaultValue={groupe}


            className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
          />
        </div>


      <div className="grid gap-2">
            <label className="blofont-semibold text-text" htmlFor="grid-state">
    {t("Type de financement")} <span className="text-sm text-red-500">*</span>
    </label>
            <div className="relative">
            <select
            id="field_choisir_une_categorie"
            name="field_choisir_une_categorie"
            className="px-2 py-3 rounded-md border w-full border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"

          >

          {categorieprj
          .map((cat) => (
            <option key={cat.id} value={cat.id} defaultValue={cat.id}  >

                  {cat.name}

            </option>
            ))}
            </select>

            </div>
          </div>

                <div className="grid gap-2">

                  <label htmlFor="body" className="font-semibold text-text">
                    {t("description")} <span className="text-sm text-red-500">*</span>
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    defaultValue={node.body.value}



                    className="h-48 px-2 py-3 border-2 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
                  ></textarea>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="field_estimation_du_prix" className="font-semibold text-text">
                    {t("field_estimation_du_prix")} <span className="text-sm text-red-500">*</span>
                  </label>

                  <input
                    id="field_estimation_du_prix"
                    name="field_estimation_du_prix"
                    maxLength={255}
                    defaultValue={node.field_estimation_du_prix}

                    className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
                  />
                </div>

                <div className="grid gap-2">
                <DatePicker />


                </div>


                <textarea
                  id="langcode"
                  name="langcode"
                  defaultValue={node.langcode}



                  className="hidden"
                ></textarea>







                      <div className="grid gap-2">
                        <label htmlFor="revision_log" className="font-semibold text-text">
                          {t("revision_log")} <span className="text-sm text-red-500">*</span>
                        </label>

                        <input
                          id="revision_log"
                          name="revision_log"
                          maxLength={255}
                          defaultValue={node.revision_log}

                          className="px-2 py-3 border-2 border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
                        />
                      </div>


                      {node.field_document_s_annexe_s_?.length ? (
                                             <>
                                       {node.field_document_s_annexe_s_.map((media,index) => (
                                   <li key={index}>{media.field_document_s_annexe_s_.uri.url}</li>
                                               ))}
                                             </>
                                           ) : (
                                             <>

                                             </>
                                           )}



<div className="App">
    <form key="2" onSubmit={handlesubmit_task2}>
      <h1>React File Upload</h1>
      <input type="file" onChange={handleChange}/>


<button
      name="submit2"
      variant="contained"
      color="primary"
      type="submit"
      onClick={handlesubmit_task2}
    >
      task 2
    </button>
    </form>
</div>

button replace
<input
type="file"
id="document"
  name="document"
  ref={ref} />
     <button onClick={reset}>reset</button>


                      <div className="grid gap-2">
                        <label htmlFor="document" className="font-semibold text-text">
                          {t("Devis ou facture proforma")} <span className="text-sm text-red-500"></span>
                        </label>
                        <input
                          type="file"
                          id="document"
                          name="document"

                          className="px-2 py-3 bg-white rounded-md border border-gray focus:outline-dotted focus:outline-offset-2 focus:outline-link focus:ring-0 focus:border-gray"
                        />

                      </div>


















      <div>


      <button id="submit1" variant="contained" color="primary" type="submit">
        task 1
      </button>


      <button id="submit2" variant="contained" color="primary" type="submit">
        task 2
      </button>
        <input
          type="submit"
          className="px-3 hidden fedblue py-2 text-md text-white w-full transition-colors rounded-xl cursor-pointer bg-link hover:bg-white hover:text-whote border-link"
          disabled={formStatus?.status === "fetching"}
          value={
            formStatus?.status === "fetching" ? t("please-wait") : t("Modifier le financement")
          }
        />
      </div>
    </form>
  )
}
