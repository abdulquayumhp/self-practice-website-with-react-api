import React, { useEffect, useState } from "react";
import SingelBlogs from "./SingelBlogs";

const Blog = () => {
	const [search, setSearch] = useState("");
	const [blogs, setBlog] = useState([]);
	// console.log(blogs);

	useEffect(() => {
		fetch(
			`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
		)
			.then(res => res.json())
			.then(data => setBlog(data.player));
	}, [search]);
	return (
		<div>
			<div className="bg-blue-100 py-10 ">
				<div className="form-control w-4/5 lg:w-3/5 mx-auto  ">
					<div className="input-group ">
						<input
							onChange={e => setSearch(e.target.value)}
							type="text"
							placeholder="Select Your Favoutire palyer…"
							className="rounded-lg border pl-3 w-full lg:w-11/12 mx-auto"
						/>
						<button className="btn btn-square lg:w-1/4  ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-5 bg-blue-100">
				{blogs.map(player => (
					<SingelBlogs key={player.idPlayer} player={player} />
				))}
			</div>
		</div>
	);
};

export default Blog;
