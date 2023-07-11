import React from 'react'
import { useCallback, useState, useRef, useMemo } from "react";
import useSWRInfinite from "swr/infinite";
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json());


// export const useInfiniteScroll = (observer, callback) => {
// 	const lastDataRendered = useCallback(
// 		(node) => {
// 			if (observer.current) observer.current.disconnect();
// 			observer.current = new IntersectionObserver((entries) => {
// 				if (entries[0].isIntersecting) {
// 					callback();
// 				}
// 			});
// 			if (node) observer.current.observe(node);
// 		},
// 		[callback, observer]
// 	);

// 	return { lastDataRendered };
// };

export default function CalculApport({ node, ...props }: CalculApportProps) {
	// 	const { data: calcvalues, error: calcvaluesError, setSize } = useSWRInfinite(
	// 		(index) => `https://fed.septembre.io/rest_explor_project_in_group/` + node.id,
	// 		fetcher
	// 	);

	// 	const loading = calcvalues && calcvalues.length === 0;

	// 	const observer = useRef(null);
	// 	const { lastDataRendered } = useInfiniteScroll(observer, () => {
	// 		setSize((prevSize) => prevSize + 1);
	// 	});

	// 	if (calcvaluesError) return <div>Failed to load</div>;
	// 	if (!calcvalues || !Array.isArray(calcvalues))
	// 		return <div>Pas d'apports</div>;

	// 	return (
	// 		<div>
	// 			{calcvalues.map((calcvalue, index) => {
	// 				// const isLastItem = index === calcvalues.length - 1;
	// 				return (
	// 					<div
	// 						key={calcvalue.id}
	// 					// ref={isLastItem ? lastDataRendered : null}
	// 					>
	// 						{calcvalue.field_estimation_du_prix}€ • {calcvalue.label} apports
	// 					</div>
	// 				);
	// 			})}
	// 			{loading && <div>Loading more...</div>}
	// 		</div>
	// 	);
	// }

	const { data: calcvalues, error: calcvaluesError } = useSWR(() => `https://fed.septembre.io/rest_explor_project_in_group/` + node.id, fetcher);

	if (calcvaluesError) return <div>Failed to load</div>;
	if (!calcvalues || !Array.isArray(calcvalues)) return <div>Pas d'apports</div>;

	return (
		<div>
			{calcvalues.map((calcvalue) => (
				<div key={calcvalue.id}>
					{calcvalue.field_estimation_du_prix}€ • {calcvalue.label} apports
				</div>
			))}
		</div>
	);
}