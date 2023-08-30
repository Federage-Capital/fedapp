export function BoxParticipationsEncours({
value,
 }: BoxParticipationsEncoursProps) {
	return (
		<h2>

Non validés:

<br/>
{value.entity_id?.field_estimation_du_prix}

</h2>
	);
}
