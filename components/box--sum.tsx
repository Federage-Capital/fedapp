
export function BoxSum({ filteredNonvalide }: BoxSumProps) {



  let result2 = Math.floor("2020.1");
  console.log(result2); // 2020


  const getAverageAge2 = (filteredNonvalide) => {
    let sum = 0
    for (let i = 0; i < filteredNonvalide.length; i++) {
      sum += filteredNonvalide[i].entity_id.field_estimation_du_prix
    }
    return sum / filteredNonvalide.length
  }

getAverageAge2(filteredNonvalide) // Result is 32.66....




	return (

<>

{getAverageAge2(filteredNonvalide)}
</>
	);
}
