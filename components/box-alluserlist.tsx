import React from "react";
import Link from 'next/link'
import Image from 'next/image'

export function BoxUserList({ node }: BoxAlluserlistProps) {
    <div>




        {node.user_picture?.uri && (
            <div className="overflow-hidden h-10 w-10 rounded-xl">
                <Link href={`user/${node.drupal_internal__uid}`} passHref>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.user_picture?.uri.url}`}
                        width={10}
                        height={10}
                        layout="responsive"
                        objectFit="cover"
                        alt={node.drupal_internal__uid}
                    />
                </Link>
            </div>
        )}


        {!node.user_picture?.uri && (
            <span className="inline-block h-10 w-10 overflow-hidden rounded-xl bg-gray-100">
                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </span>
        )}

    </div>
}