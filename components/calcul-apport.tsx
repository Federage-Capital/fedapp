import React from 'react'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json());


export default function CalculApport({ node, ...props }: CalculApportProps) {

	const { data: calcvalues, error: calcvaluesError } = useSWR(() => `https://fed.septembre.io/rest_explor_project_in_group/` + node.id, fetcher)
	if (calcvaluesError) return <div> failed to load</div>
	if (!calcvalues) return <div> failed to calcvalues</div>

	return (
		<div>
			fe
			{calcvalues.uuid}
			dfs
		</div>
	)
}