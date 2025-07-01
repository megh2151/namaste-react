// const heading = React.createElement("h1", {id:"heading"}, "Hello Word Namaste React");  //Create Element. {} Attributes
// const root = ReactDOM.createRoot(document.getElementById("root")); //Create Root
// root.render(heading); //Render heading element in root

import React from "react"; //Import React
import ReactDOM from "react-dom/client"; //Import ReactDOM

const heading = React.createElement("h1", {id:"heading"}, "Hello Word Namaste React");  //Create Element. {} Attributes
const root = ReactDOM.createRoot(document.getElementById("root")); //Create Root
root.render(heading); //Render heading element in root

