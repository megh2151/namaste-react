import React from "react"; //Import React
import ReactDOM from "react-dom/client"; //Import ReactDOM
import Header from "./components/Header"; //Import Header component
import Footer from "./components/Footer"; //Import Footer component
import RestaurantCard from "./components/RestaurantCard";


const Body = () => {
    return (
        <div>
            <Header />
                <RestaurantCard/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root")); //Create Root
root.render(<Body/>); //Render heading element in root

