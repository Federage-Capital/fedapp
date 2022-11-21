import Image from "next/image"
import { DrupalNode } from "next-drupal"
import Link from "next/link";
import useSWR from 'swr'

import { absoluteUrl, formatDate } from "lib/utils"

interface GroupFederageMembre {
  membres: DrupalNode,
  groupe_types: DrupalNode,

}

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export function GroupFederageMembre({ groupe_types, data, data2, ...props }: GroupFederageMembreProps) {
  const { data2: membres, error } = useSWR('https://fed.septembre.io/jsonapi/group_content/federage-group_membership', fetcher)

    if (error) return <div>Failed to load</div>
    if (!membres) return <div>Loading...23</div>


  return (
    <sep {...props}>






membres
<div className="articles">
  <h1>label : {membres}</h1>
description


Membres de ce groupe<br/>


Offres de ce groupe<br/>



</div>

    </sep>
  )
}
