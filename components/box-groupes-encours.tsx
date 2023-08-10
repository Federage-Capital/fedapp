export function BoxProjetsEncours({
value,
 }: BoxProjetsEncoursProps) {
	return (
		<h2>

Non validés:
{value
.filter(nonvalide => nonvalide.entity_id.field_statut.id.includes('6e6f83ed-b882-4b24-9a1b-897ab1f2e37c'))
.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
}<br/>


Montants validés
{value
.filter(nonvalide => nonvalide.entity_id.field_statut.id.includes('add21795-b0ad-45ab-ba10-a16859dcaf05'))
.reduce((total, currentValue) => total = total + +currentValue.entity_id.field_estimation_du_prix,0)
}

</h2>
	);
}
