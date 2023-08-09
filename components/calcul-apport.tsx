import React from 'react'
import { useCallback, useState, useRef, useMemo } from "react";
import useSWRInfinite from "swr/infinite";
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json());


export default function CalculApport({ node, ...props }: CalculApportProps) {
	const { data: calcvalues, error: calcvaluesError } = useSWR(() => `https://fed.septembre.io/rest_explor_project_in_group/` + node.id, fetcher);

	if (calcvaluesError) return <div>Failed to load</div>;
	if (!calcvalues || !Array.isArray(calcvalues)) return <div>Pas d'apports</div>;

	return (
		<div>
			{calcvalues.map((calcvalue) => (
				<div key={calcvalue.id}>
					{calcvalue.field_estimation_du_prix}€ • {calcvalue.label} apports spécifiés
				</div>
			))}
		</div>
	);
}