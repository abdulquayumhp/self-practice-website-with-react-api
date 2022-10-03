import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./componets/Main/Main";
import About from "./componets/Navbar/About";
import Blog from "./componets/Navbar/Blog";
import Contact from "./componets/Navbar/Contact";
import Experiance from "./componets/Navbar/Experiance";
import Home from "./componets/Navbar/Home";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main />,
			children: [
				{ path: "/", element: <Home /> },
				{ path: "home", element: <Home /> },
				{ path: "about", element: <About /> },
				{ path: "experience", element: <Experiance /> },
				{ path: "blog", element: <Blog /> },
				{ path: "contact", element: <Contact /> },
			],
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
