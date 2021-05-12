import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<footer className="bg-dark text-center text-white">
			<div className="text-center p-3">{props.name}</div>
		</footer>
	);
};

Footer.propTypes = {
	name: PropTypes.string
};

export default Footer;
