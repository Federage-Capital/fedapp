import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react";

import {
  format,
  subMonths,
  addMonths,
  subYears,
  addYears,
  isEqual,
  getDaysInMonth,
  getDay
} from "date-fns";
interface FormFinancementProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}

export function FormFinancement({ className, ...props }: FormFinancementProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()

   const query = router.query;

   const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   const [dayCount, setDayCount] = useState<Array<number>>([]);
   const [blankDays, setBlankDays] = useState<Array<number>>([]);
   const [showDatepicker, setShowDatepicker] = useState(false);
   const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
   const [selectedDate, setSelectedDate] = useState (new Date());
   const [type, setType] = useState("date");

   const decrement = () => {
     switch (type) {
       case "date":
         setDatepickerHeaderDate((prev) => subMonths(prev, 1));
         break;
       case "month":
         setDatepickerHeaderDate((prev) => subYears(prev, 1));
         break;
       case "year":
         setDatepickerHeaderDate((prev) => subMonths(prev, 1));
         break;
     }
   };

   const increment = () => {
     switch (type) {
       case "date":
         setDatepickerHeaderDate((prev) => addMonths(prev, 1));
         break;
       case "month":
         setDatepickerHeaderDate((prev) => addYears(prev, 1));
         break;
       case "year":
         setDatepickerHeaderDate((prev) => subMonths(prev, 1));
         break;
     }
   };

   const isToday = (date: number) =>
     isEqual(
       new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date),
       selectedDate
     );

   const setDateValue = (date: number) => () => {
     setSelectedDate(
       new Date(
         datepickerHeaderDate.getFullYear(),
         datepickerHeaderDate.getMonth(),
         date
       )
     );
     setShowDatepicker(false);
   };

   const getDayCount = (date: Date) => {
     let daysInMonth = getDaysInMonth(date);

     // find where to start calendar day of week
     let dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1));
     let blankdaysArray = [];
     for (let i = 1; i <= dayOfWeek; i++) {
       blankdaysArray.push(i);
     }

     let daysArray = [];
     for (let i = 1; i <= daysInMonth; i++) {
       daysArray.push(i);
     }

     setBlankDays(blankdaysArray);
     setDayCount(daysArray);
   };

   const isSelectedMonth = (month: number) =>
     isEqual(
       new Date(selectedDate.getFullYear(), month, selectedDate.getDate()),
       selectedDate
     );

   const setMonthValue = (month: number) => () => {
     setDatepickerHeaderDate(
       new Date(
         datepickerHeaderDate.getFullYear(),
         month,
         datepickerHeaderDate.getDate()
       )
     );
     setType("date");
   };

   const toggleDatepicker = () => setShowDatepicker((prev) => !prev);

   const showMonthPicker = () => setType("month");

   const showYearPicker = () => setType("date");

   useEffect(() => {
     getDayCount(datepickerHeaderDate);
   }, [datepickerHeaderDate]);


  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch("/api/financements", {
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
      <div className="grid gap-2">
        <label htmlFor="title" className="font-semibold text-text">
          {t("Nom de l’apport")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="title"
          name="title"
          maxLength={255}
          required
          className="px-2 py-3 rounded-md border border-gray focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-link focus:border-gray"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="body" className="font-semibold text-text">
          {t("Objet de l’apport")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="body"
          name="body"
          className="h-48 px-2 py-3 rounded-md border border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
        ></textarea>
      </div>

      <div className="grid gap-2">
            <label className="font-semibold text-text" htmlFor="grid-state">
  {t("Type d’apport")} <span className="text-sm text-red-500">*</span>
   </label>
            <div className="relative">
              <select
              id="field_choisir_une_categorie"
              name="field_choisir_une_categorie"
              className="px-2 py-3 rounded-md border w-full border-gray focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray focus:outline-link"
            >
  <option value="29876849-c910-4ee3-8453-51dbe9d55bf2">Numéraire</option>
    <option value="e49e869f-22d7-4edd-9017-f134106ff86d">Apport en industrie</option>
      <option value="9c801cd0-a804-43e4-ba22-092ccc2ae711">Nature</option>
              </select>

            </div>
          </div>


          <div className="grid gap-2">
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
      <div className="grid gap-2">
      <div className="antialiased sans-serif">
        <div>
          <div className="container mx-auto  py-2 md:py-10">
            <div className="mb-5 w-full">
              <label
                htmlFor="datepicker"
                className="font-bold mb-1 text-gray-700 block"
              >
                Date de livraison
              </label>
              <div className="relative">
                <input type="hidden" name="noname" />
                <input
                  type="text"
                  id="field_date_de_livraison"
                  name="field_date_de_livraison"
                  readOnly
                  className="cursor-pointer w-full pl-4 pr-10 py-3 leading-none rounded-md shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                  placeholder="Select date"
                  value={format(selectedDate, "yyyy-MM-dd'T'15:44:33+00:00")}
                  onClick={toggleDatepicker}
                />
                <div
                  className="cursor-pointer absolute top-0 right-0 px-3 py-2"
                  onClick={toggleDatepicker}
                >
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                {showDatepicker && (
                  <div
                    className="bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0"
                    style={{ width: "17rem" }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <button
                          type="button"
                          className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                          onClick={decrement}
                        >
                          <svg
                            className="h-6 w-6 text-gray-500 inline-flex"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                      </div>
                      {type === "date" && (
                        <div
                          onClick={showMonthPicker}
                          className="flex-grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
                        >
                          <p className="text-center">
                            {format(datepickerHeaderDate, "MMMM")}
                          </p>
                        </div>
                      )}
                      <div
                        onClick={showYearPicker}
                        className="flex-grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
                      >
                        <p className="text-center">
                          {format(datepickerHeaderDate, "yyyy")}
                        </p>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                          onClick={increment}
                        >
                          <svg
                            className="h-6 w-6 text-gray-500 inline-flex"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {type === "date" && (
                      <>
                        <div className="flex flex-wrap mb-3 -mx-1">
                          {DAYS.map((day, i) => (
                            <div
                              key={i}
                              style={{ width: "14.26%" }}
                              className="px-1"
                            >
                              <div className="text-gray-800 font-medium text-center text-xs">
                                {day}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap -mx-1">
                          {blankDays.map((_, i) => (
                            <div
                              key={i}
                              style={{ width: "14.26%" }}
                              className="text-center border p-1 border-transparent text-sm"
                            ></div>
                          ))}
                          {dayCount.map((d, i) => (
                            <div
                              key={i}
                              style={{ width: "14.26%" }}
                              className="px-1 mb-1"
                            >
                              <div
                                onClick={setDateValue(d)}
                                className={`cursor-pointer text-center text-sm leading-none rounded-full leading-loose transition ease-in-out duration-100 ${
                                  isToday(d)
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-700 hover:bg-blue-200"
                                }`}
                              >
                                {d}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {type === "month" && (
                      <div className="flex flex-wrap -mx-1">
                        {Array(12)
                          .fill(null)
                          .map((_, i) => (
                            <div
                              key={i}
                              onClick={setMonthValue(i)}
                              style={{ width: "25%" }}
                            >
                              <div
                                className={`cursor-pointer p-5 font-semibold text-center text-sm rounded-lg hover:bg-gray-200 ${
                                  isSelectedMonth(i)
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-700 hover:bg-blue-200"
                                }`}
                              >
                                {format(
                                  new Date(
                                    datepickerHeaderDate.getFullYear(),
                                    i,
                                    datepickerHeaderDate.getDate()
                                  ),
                                  "MMM"
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    )}{" "}

                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>

<p>
Toute saisie réévalue l&apos;apport. Les données financières doivent être validées par les partenaires pour être comptabilisées.



</p>






      <div>

      <div className="block  w-100 text-right">
      <button onClick={() => router.back()} class="bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
        Annuler
      </button>

        <input
          type="submit"
          class="ml-10 bg-blue-300 hover:bg-blue-400 text-blue-700 font-bold py-2 px-4  hover:border-blue-500 rounded"
          value={
            formStatus?.status === "fetching"
              ? t("please-wait")
              : t("Suivant")
          }
        />
        </div>
      </div>
    </form>
  )
}
