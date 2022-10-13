import Image from "next/image"
import { DrupalNode } from "next-drupal"
import * as React from "react";
import { useRouter } from "next/router";
import { getSession, useSession, signOut } from "next-auth/react";

import { absoluteUrl, formatDate } from "lib/utils"

interface TetiereProps {
  user: DrupalNode[];
}

export function Tetiere({ user, ...props }: TetiereProps) {
  const { data } = useSession();
  const [name, setName] = React.useState(user?.display_name);


  return (





  )
}
