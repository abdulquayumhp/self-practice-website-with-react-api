import React, { useEffect, useState } from "react";
import DetailsAbout from "./DetailsAbout";

const About = () => {
	const [about, setAbout] = useState([]);
	console.log(about);
	useEffect(() => {
		fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s`)
			.then(res => res.json())
			.then(data => setAbout(data.drinks));
	}, []);
	return (
		<div className="grid lg:grid-cols-2 ">
			{about.map(about => (
				<DetailsAbout about={about} key={about.idDrink} />
			))}
		</div>
	);
};

export default About;
