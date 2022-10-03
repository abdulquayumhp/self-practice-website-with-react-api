const Data = ({ user, user2, user3, user4 }) => {
	// console.log(user3);
	const { name, description, img, title } = user;
	const { names, descriptions, imgs } = user2;
	const { name2, description2, img2, title2 } = user3;
	const { name3, description3, img3, title3 } = user4;
	// console.log(names);
	return (
		<div>
			<div className="md:flex  w-11/12 lg:w-10/12  mx-auto mt-2 bg-blue-100 px-10 lg:px-20 pt-20 rounded-lg ">
				<div className="py-20 md:text-left">
					<p className="text-slate-500 text-xl">{title}</p>
					<h1 className="text-6xl py-5 font-bold">
						<span>{name} </span>
					</h1>
					<p className="text-slate-500">{description}</p>
					<button className="py-5 px-16 bg-slate-300 mt-10">Know More</button>
				</div>
				<div>
					<img className="h-full " src={img} alt="" />
				</div>
			</div>
			{/* // home ABout */}
			<div className="lg:flex  w-11/12 lg:w-10/12 mx-auto mt-36 pb-10 bg-blue-100 px-10 lg:px-20 pt-20 rounded-lg ">
				<div className="bg-amber-100 ">
					<img
						className="  md:p-20  md:ml-20 object-cover "
						src={imgs}
						alt=""
					/>
				</div>
				<div className="md:text-left text-center md:ml-20 md:pt-20">
					<h1 className=" text-2xl md:text-6xl py-5 font-bold">{names}</h1>
					<p className="text-slate-500">{descriptions}</p>
					<button className="py-5 px-16 bg-slate-300 mt-10">Know More</button>
				</div>
			</div>
			<div className="md:flex  w-11/12 lg:w-10/12  mb-20 mx-auto mt-2 bg-blue-100 px-10 lg:px-20 pt-20 rounded-lg ">
				<div className="py-20 md:text-left">
					<p className="text-slate-500 text-xl">{title2}</p>
					<h1 className="text-6xl py-5 font-bold">
						<span>{name2} </span>
					</h1>
					<p className="text-slate-500">{description2}</p>
					<button className="py-5 px-16 bg-slate-300 mt-10">Know More</button>
				</div>
				<div className="mb-10">
					<img className="h-full rounded-lg" src={img2} alt="" />
				</div>
			</div>
			<div className="lg:flex  w-11/12 lg:w-10/12 mx-auto mt-36 pb-10 bg-blue-100 px-10 lg:px-20 pt-20 rounded-lg ">
				<div className="bg-white">
					<img
						className="  md:p-20  md:mr-20 object-cover "
						src={img3}
						alt=""
					/>
				</div>
				<div className="md:text-left text-center md:ml-20 md:pt-20">
					<p className="text-slate-500 text-xl">{title3}</p>
					<h1 className=" text-2xl md:text-6xl py-5 font-bold">{name3}</h1>
					<p className="text-slate-500">{description3}</p>
					<button className="py-5 px-16 bg-slate-300 mt-10">Know More</button>
				</div>
			</div>
		</div>
	);
};

export default Data;
