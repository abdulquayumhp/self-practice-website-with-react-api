import React from "react";
import Data from "./Data";

const Home = ({ user }) => {
	const userHomeData = [
		{
			id: 1,
			name: "ABDUL. QUAYUM",
			title: "As a learner web development.",
			img: "https://freepngimg.com/save/147234-standing-man-business-formal-free-png-hq/936x907",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel, exercitationem quae ut consequatur eum quia sapiente distinctio suscipit non.",
			item: [
				{
					names: "Send Warm Holiday wisher",
					titles: "As a learner web development.",
					imgs: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
					descriptions:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam magni quibusdam ullam ab modi odit id rerum ut voluptas! Dolores?",
				},
			],
			item2: [
				{
					name2: "Hard Work Make Success",
					title2: "As a learner web development.",
					img2: "https://www.meme-arsenal.com/memes/a56aae1ef614aaa2e9b12d6c1655e669.jpg",
					description2:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam magni quibusdam ullam ab modi odit id rerum ut voluptas! Dolores?",
				},
			],
			item3: [
				{
					name3: "Need Something special for someone",
					title3: "As a learner web development.",
					img3: "https://images.unsplash.com/photo-1598257006463-7c64a5a538cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
					description3:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam magni quibusdam ullam ab modi odit id rerum ut voluptas! Dolores?",
				},
			],
		},
	];
	return (
		<div>
			{userHomeData.map(user => (
				<Data
					user={user}
					user2={user.item[0]}
					user3={user.item2[0]}
					user4={user.item3[0]}
					key={user.id}
				/>
			))}
		</div>
	);
};

export default Home;
