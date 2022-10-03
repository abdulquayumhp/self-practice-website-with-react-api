import React from "react";

const ExperianceBlog = ({ experi }) => {
	console.log(experi);
	const { picture, name, balace, address, about } = experi;
	return (
		<div>
			<div className=" rounded-md w-96 bg-base-100 shadow-xl mb-8 w-9/12 mx-auto my-10 ">
				<figure>
					<img
						className="rounded-md h-60 w-full object-cover"
						src={picture}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">Work : {name}</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="bg-blue-300 py-5 w-full rounded-md">
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperianceBlog;
