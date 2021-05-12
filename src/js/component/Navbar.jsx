import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
	return (
		<nav className=" navbar navbar-expand-lg navbar-light bg-dark">
			<a className="navbar-brand navbar-title" href="#">
				{props.title}
			</a>
			<button
				className="navbar-toggler navbar-title"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse d-flex justify-content-end navbar-title"
				id="navbarNav">
				<ul className="navbar-nav ">
					<li className="nav-item active">
						<a className="nav-link navbar-title" href="#">
							{props.link1}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link navbar-title" href="#">
							{props.link2}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link navbar-title" href="#">
							{props.link3}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link navbar-title" href="#">
							{props.link4}
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
