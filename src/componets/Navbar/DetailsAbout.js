import React from "react";

const DetailsAbout = ({ about }) => {
	console.log(about);
	const {
		strDrink,
		strAlcoholic,
		strCategory,
		strDrinkThumb,
		strGlass,
		strInstructions,
	} = about;
	return (
		<div>
			<div className="card lg:card-side bg-blue-100 m-5  shadow-xl">
				<figure>
					<img src={strDrinkThumb} alt="Album" className="w-96" />
				</figure>
				<div className="card-body">
					<h2 className="card-title md:text-sm lg:text-md text-blue-400">
						<span className="text-black">Drink</span> : {strCategory}
					</h2>
					<p className="font-semibold lg:text-md lg:text-blue-400">
						{" "}
						<span className="text-black">is Alcoholic</span> : {strAlcoholic}
					</p>
					<p className="font-semibold lg:text-md text-blue-400">
						{" "}
						<span className="text-black">Category</span> : {strDrink}
					</p>
					<p className="font-semibold lg:text-md text-blue-400">
						{" "}
						<span className="text-black">Drink Name</span> : {strCategory}
					</p>
					<p className="font-semibold lg:text-md text-blue-400">
						{" "}
						<span className="text-black">Details</span> :{" "}
						{strInstructions ? strInstructions.slice(0, 10) : "N/A"}...
					</p>
					<div className="card-actions justify-end">
						<button className="bg-blue-300 py-5 w-full rounded-md">
							Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsAbout;
