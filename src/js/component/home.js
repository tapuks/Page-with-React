import React from "react";
import Navbar from "./Navbar.jsx";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hola</h1>
			<Navbar />
		</div>
	);
}
