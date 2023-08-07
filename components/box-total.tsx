
export function BoxTotal({ user, total }: BoxTotalProps) {

	const getTotFin = (total) => {
      let sum = 0
      for (let i = 0; i < total.length; i++) {
        sum += total[i].field_estimation_du_prix
      }
      return sum

    }


	return (


		<div className="px-5 py-3 text-base font-semibold">
			Portefeuille<br />


	{getTotFin(total)}





		</div>

	);
}
