import React, { useEffect, useState } from "react";
import ExperianceBlog from "./ExperianceBlog";

const Experiance = () => {
	const [experi, setExperi] = useState([]);
	useEffect(() => {
		fetch(`Data.json`)
			.then(res => res.json())
			.then(data => setExperi(data));
	}, []);
	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-2  bg-blue-100 ">
			{experi.map(experi => (
				<ExperianceBlog key={experi.id} experi={experi} />
			))}
		</div>
	);
};

export default Experiance;
