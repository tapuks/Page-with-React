import React from "react";
import Navbar from "./Navbar.jsx";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center container">
			<Navbar
				title="Start Bootstrap"
				link1="Home"
				link2="About"
				link3="Services"
				link4="Contact"
			/>
		</div>
	);
}
