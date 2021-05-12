import React from "react";
import PropTypes from "prop-types";

const Jumbotron = props => {
	return (
		<div className="jumbotron container">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.text}</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					{props.button}
				</a>
			</p>
		</div>
	);
};
Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string
};
export default Jumbotron;
