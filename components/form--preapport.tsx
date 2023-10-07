import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import { DatePicker } from "components/datepickercomp"
import { FormMembre } from "components/form--membre"
import { BaxActualPreapports } from "components/box-actual-preapports"


import { useForm, useFieldArray } from "react-hook-form";
import useSWR from 'swr'



interface FormPreapportProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}


const fetcher = (url) => fetch(url).then((res) => res.json());

export function FormPreapport({ className, categorieprj, ...props }: FormPreapportProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()

   const query = router.query;

  const { data: preapports, error:preapportsError } = useSWR(() => `https://fed.septembre.io/preapports-du-groupe-rest` + `/` + query.gid, fetcher)

  const colored = "bg-white fedblueblue";

	const [openTab, setOpenTab] = React.useState(1);



   const { register, control, handleSubmit } = useForm();
   const { fields, remove, append } = useFieldArray({
     control,
     name: "students"
   });
   const subs = [
     { name: "Math", price: 20 },
     { name: "English", price: 70 }
   ];
   const registerSubmit = (data) => {
     console.log(data);
   };



  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch("/api/prefinancement", {
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

      router.reload()
  }

  return (

<>
    <div class="grow w-full">




    </div>
    <form
      className={classNames("grow w-full", className)}
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



{query.gid}





      <div className="self-stretch h-[58.29px] flex flex-col py-2 px-3.5 box-border items-start justify-between text-gray-500">
        <div className="self-stretch flex-1 rounded-lg bg-gray-100 flex flex-row items-center justify-start">
          <div className="flex-1 rounded-lg bg-gray-100 flex flex-row p-1 items-center justify-start gap-[32px]">
            <div className="flex-1  flex flex-col py-2 px-3 items-center justify-center text-mediumblue-100">
              <div className="relative leading-[20px] font-semibold">
              <a
                className={"text-xs font-bold px-2 py-3 rounded-md leading-normal " + (openTab === 1 ? colored : "text-" + "bg-white" )}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Objet
              </a>
              </div>
            </div>
            <div className="flex-1 rounded-md flex flex-col py-2 px-3 items-center justify-center">
              <div className="relative leading-[20px] font-semibold">
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
                Détails
              </a>
              </div>
            </div>
            <div className="flex-1 rounded-md flex flex-col py-2 px-3 items-center justify-center">
              <div className="relative leading-[20px] font-semibold">
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
                Membres
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={openTab === 1 ? "block" : "hidden"}>
      <div className="self-stretch flex flex-col pt-0 px-3.5 pb-2.5 items-start justify-start">
        <div className="self-stretch flex flex-col pt-0 px-0 pb-2 items-start justify-start gap-[4px]">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Décrire l’apport
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-row py-2.5 px-3 items-center justify-center text-sm text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 grow relative leading-[24px]">
            <label htmlFor="title" className="font-semibold text-text">
              {t("Nom de l’apport")} <span className="text-sm text-red-500">*</span>
            </label>
            <input
              id="title"
              name="title"
              maxLength={255}
              required
              className="px-2 py-3 rounded-md w-96 border border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
            />





            </div>
              <div className="flex-1 grow relative leading-[24px]">
            <label className="font-semibold w-96 text-text" htmlFor="grid-state">
            {t("Type d’apport")} <span className="text-sm text-red-500">*</span>
   </label>
            <div className="relative">
              <select
              id="field_choisir_une_categorie"
              name="field_choisir_une_categorie"
              className="px-2 py-3 rounded-md border w-96 border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
            >



            {categorieprj
            .map((cat) => (
              <option key={cat.id} value={cat.id}>

                    {cat.name}

              </option>
              ))}
              </select>
              </div>
              </div>
          </div>
        </div>
      </div>
      </div>


      <div className={openTab === 2 ? "block" : "hidden"}>
      <div className="self-stretch flex flex-col pt-0 px-3.5 pb-2.5 items-start justify-start">
        <div className="self-stretch flex flex-col pt-0 px-0 pb-2 items-start justify-start gap-[4px]">

        <label htmlFor="body" className="font-semibold text-text">
          {t("Objet de l’apport")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="body"
          name="body"
          className="h-48 px-2 py-3 rounded-md border border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
          <div className="self-stretch relative leading-[20px] font-semibold">
          <DatePicker />
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-row py-2.5 px-3 items-center justify-center text-sm text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 relative leading-[24px]">
            <label htmlFor="field_estimation_du_prix" className="font-semibold text-text">
              {t("Montant de l’apport")} <span className="text-sm text-red-500">*</span>
            </label>
            <input
              id="field_estimation_du_prix"
              name="field_estimation_du_prix"
              maxLength={255}

              className="px-2 py-3 rounded-md border border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
            />
            </div>
          </div>
        </div>
      </div>
      </div>



      <div className={openTab === 3 ? "block" : "hidden"}>
      <div className="self-stretch flex flex-col pt-0 px-3.5 pb-2.5 items-start justify-start">
        <div className="self-stretch flex flex-col pt-0 px-0 pb-2 items-start justify-start gap-[4px]">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Membres
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-row py-2.5 px-3 items-center justify-center text-sm text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 relative leading-[24px]">
            <FormMembre className="max-w-2xl mx-auto" />

            </div>
          </div>
        </div>
      </div>
      </div>




            <div className="grid gap-2 hidden">
              <label htmlFor="gid" className="font-semibold text-text">
                {t("gid")} <span className="text-sm text-red-500">*</span>
              </label>

              <textarea
                id="gid"
                name="gid"
                value={query.gid}
                className="hidden"
              ></textarea>
            </div>

      <div className="self-stretch flex flex-col py-0 px-3.5 items-center justify-start text-center text-sm">
        <div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-2.5 px-[18px] items-center justify-center">
          <div className="flex-1 relative leading-[20px] font-semibold">

            <input
              type="submit"
              class="  hover:bg-blue-400 text-blue-700 font-bold py-2 px-4  hover:border-blue-500 rounded"
              value={
                formStatus?.status === "fetching"
                  ? t("please-wait")
                  : t("+ Ajouter l'apport")
              }
            />
          </div>
        </div>
      </div>














      <div>


      </div>


Créer le projet





    </form>
    </>
  )
}
