import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="navbar   px-5 lg:px-48">
			<div className="flex-1">
				<a className="btn btn-ghost  text-xl">
					AB.<span className=" text-blue-800 ">LD.</span>
					<span className="text-blue-500">IB</span>{" "}
				</a>
			</div>
			<div
				className={`flex-1  text-cyan-700 absolute  z-5 lg:static duration-500 ease-in-out   bg-blue-200 lg:bg-white w-full  ${
					open ? "top-0" : "top-[-170px]"
				}`}>
				<div className="lg:pr-10 lg:flex-row flex-col flex text-center mx-auto p-5">
					<Link className="mr-5 font-semibold " to="/home">
						Home
					</Link>
					<Link className="font-semibold mr-5" to="/about">
						About
					</Link>
					<Link className=" font-semibold mr-5" to="/experience">
						Experience
					</Link>
					<Link className="mr-5 font-semibold" to="/blog">
						Blog
					</Link>
					<Link className="mr-5 font-semibold" to="/contact">
						Contact
					</Link>
				</div>
			</div>
			<div className="dropdown dropdown-end">
				<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
					<div className="w-10 rounded-full">
						<img src="https://placeimg.com/80/80/people" />
					</div>
				</label>
				<ul
					tabIndex={0}
					className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
					<li>
						<a className="justify-between">
							Profile
							<span className="badge">New</span>
						</a>
					</li>
					<li>
						<a>Settings</a>
					</li>
					<li>
						<a>Logout</a>
					</li>
				</ul>
			</div>
			<div
				onClick={() => setOpen(!open)}
				className="h-6 w-6 text-blue-500 lg:hidden z-10 ">
				{!open ? <Bars3Icon /> : <XMarkIcon />}
			</div>
		</div>
	);
};

export default Header;
