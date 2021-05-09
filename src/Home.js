import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Navbar from './Navbar';

//componente principal
const Home =()=> {
    return <h1>Hola</h1>
}
// here we tell React to put our main app component <Home /> inside the DOM element with id #myApp 
ReactDOM.render(
  <Home />,
  document.querySelector("#myApp")
);