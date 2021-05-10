import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light container">
			<a class="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse d-flex justify-content-end"
				id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#">
							<span class="sr-only">Home</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							About
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Services
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string,
	link1: PropTypes.string,
	link2: PropTypes.string,
	link3: PropTypes.string,
	link4: PropTypes.string
};
export default Navbar;
