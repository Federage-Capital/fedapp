import React from 'react'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json());


export default function CalculApport({ node, ...props }: CalculApportProps) {
	const { data: calcvalues, error: calcvaluesError } = useSWR(() => `https://fed.septembre.io/rest_explor_project_in_group/` + node.id, fetcher);

	if (calcvaluesError) return <div>Failed to load</div>;
	if (!calcvalues || !Array.isArray(calcvalues)) return <div>Failed to fetch calcvalues</div>;

	return (
		<div>
			{calcvalues.map((calcvalue) => (
				<div key={calcvalue.id}>{calcvalue.field_estimation_du_prix}</div>
			))}
		</div>
	);
}
