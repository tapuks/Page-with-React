import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="">
			<Navbar
				title="Start Bootstrap"
				link1="Home"
				link2="About"
				link3="Services"
				link4="Contact"
			/>
			<Jumbotron
				title="A Warn Welcome!"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
				button="Call to Action!"
			/>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<Card
							image="https://cdn.pixabay.com/photo/2017/09/05/10/20/business-2717066_960_720.jpg"
							title="Card title"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
							button="Find out more!"
						/>
					</div>
					<div className="col-3">
						<Card
							image="https://cdn.pixabay.com/photo/2017/07/31/14/45/code-2558224_960_720.jpg"
							title="Card title"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
							button="Find out more!"
						/>
					</div>
					<div className="col-3">
						<Card
							image="https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_960_720.jpg"
							title="Card title"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
							button="Find out more!"
						/>
					</div>
					<div className="col-3">
						<Card
							image="https://cdn.pixabay.com/photo/2019/07/12/18/48/code-4333398_960_720.jpg"
							title="Card title"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
							button="Find out more!"
						/>
					</div>
				</div>
			</div>
			<Footer name="© 2021 Copyright David Berdiell " />
		</div>
	);
}
