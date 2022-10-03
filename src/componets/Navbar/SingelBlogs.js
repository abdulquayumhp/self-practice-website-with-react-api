import React from "react";

const SingelBlogs = ({ player }) => {
	// console.log(player);
	const { strNationality, strSport, strTeam, strThumb } = player;
	console.log(strTeam);
	return (
		<div className="w-10/12 mx-auto">
			<div className="card w-full bg-base-100 shadow-xl ">
				<figure className="px-3 pt-3">
					<img src={strThumb} alt="Shoes" className="rounded-xl " />
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">Team : {strTeam}</h2>
					<h4 className="card-title"> Nationality : {strNationality}</h4>
					<p>Playing Category : {strSport}</p>
					<div className="card-actions">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingelBlogs;
