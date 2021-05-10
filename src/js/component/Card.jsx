import Navbar from "./Navbar"
import React from "react";
import PropTypes from "prop-types";

const Card = props => {
    return (
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="" alt="Card image cap">{props.image}</img>
            <div class="card-body card-text-center">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text d-flex justify-content:center">{props.text}</p>
                <a href="#" class="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}

Card.propTypes= {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.string
}

export default Card;