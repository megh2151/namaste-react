// const heading = React.createElement("h1", {id:"heading"}, "Hello Word Namaste React");  //Create Element. {} Attributes
// const root = ReactDOM.createRoot(document.getElementById("root")); //Create Root
// root.render(heading); //Render heading element in root

import React from "react"; //Import React
import ReactDOM from "react-dom/client"; //Import ReactDOM



const Title = () =>{
    return (
        <h1 id="heading">Hello Word Namaste React</h1> //Create Element
    )
}

// Component composition. (we can use component inside component)
const HeadingComponent = () =>(
    <div id="Conatainer">
        <Title />
        <h1 className="heading">This is react functional component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root")); //Create Root
root.render(<HeadingComponent/>); //Render heading element in root

