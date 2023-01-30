import Link from "next/link"
import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import { useEffect, useState } from "react"

import { MediaImage } from "components/media--image"

interface NodePriceCardProps {
  node: DrupalNode
}



const employees = [
  {
    id: 1,
    name: "Tobe",
    experience: 4,
    department: "Accounting",
  },
  {
    id: 2,
    name: "Jolee",
    experience: 13,
    department: "Services",
  },
  {
    id: 3,
    name: "Muhammad",
    experience: 14,
    department: "Training",
  },
  {
    id: 4,
    name: "Hubie",
    experience: 5,
    department: "Sales",
  },
  {
    id: 5,
    name: "Yoshiko",
    experience: 16,
    department: "Services",
  },
  {
    id: 6,
    name: "Beatrix",
    experience: 17,
    department: "Human Resources",
  },
  {
    id: 7,
    name: "Jacob",
    experience: 4,
    department: "Engineering",
  },
  {
    id: 8,
    name: "Koren",
    experience: 4,
    department: "Accounting",
  },
  {
    id: 9,
    name: "Marissa",
    experience: 20,
    department: "Support",
  },
  {
    id: 10,
    name: "Rufe",
    experience: 18,
    department: "Training",
  },
]


export function NodePriceCard({ node, ...props }: NodePriceCardProps) {
  const { t } = useTranslation()
  const [filteredEmployees, setFilteredEmployees] = useState(employees)
   const [department, setDepartment] = useState()
   const [experience, setExperience] = useState()

   // Using Set to filter unique values
   const departments = Array.from(
     new Set(employees.map(employee => employee.department))
   )

   useEffect(() => {
     setFilteredEmployees(
       employees.filter(employee => {
         return (
           (!department || department === employee.department) &&
           (!experience ||
             (experience === "LESS_THAN_10"
               ? employee.experience < 10
               : employee.experience >= 10))
         )
       })
     )
   }, [department, experience])
  return (
    <article
      className="relative flex flex-col p-4 space-y-4 overflow-hidden bg-white border border-border group"
      {...props}
    >









    <div>

</div>
      <h2 className="flex-1 text-2xl">{node.title}</h2>
      <MediaImage media={node.field_media_image} width={335} height={225} />
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
    </article>
  )
}
