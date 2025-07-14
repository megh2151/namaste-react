// const heading = React.createElement("h1", {id:"heading"}, "Hello Word Namaste React");  //Create Element. {} Attributes
// const root = ReactDOM.createRoot(document.getElementById("root")); //Create Root
// root.render(heading); //Render heading element in root

import React from "react"; //Import React
import ReactDOM from "react-dom/client"; //Import ReactDOM


const Header = () => {
    return (
        <div className="header  header-container">
            <img src="https://t3.ftcdn.net/jpg/01/38/64/78/360_F_138647810_LTv7lSxB7mfT25wmqv9bihCe5BvYu1Y5.jpg" width={120} alt="logo" />
            <ul className="nav-items">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item">Cart</li>
                <li className="nav-item">Login</li>
            </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-links">
                <li className="footer-link">Privacy Policy</li>
                <li className="footer-link">Terms of Service</li>
                <li className="footer-link">Contact Us</li> 
            </ul>
            <ul className="social-links">
                <li className="social-link">Facebook</li>
                <li className="social-link">Twitter</li>
                <li className="social-link">Instagram</li>
                <li className="social-link">LinkedIn</li>
            </ul>
            <p>© 2023 Food Villa. All rights reserved.</p>
        </div>
    )
}

const ResCard = () => {
    return (
        <div className="res-card">
            <img src="https://www.shutterstock.com/image-photo/champaka-on-white-backgroundmagnolia-flowersisolated-260nw-653631268.jpg" alt="Restaurant" className="res-logo" />
            <h2>Restaurant Name</h2>
            <p>Rating: ⭐⭐⭐⭐</p>
            <p>Cuisine: Indian</p>
            <p>Delivery Time: 30 mins</p>
        </div>
    )
}

const Body = () => {
    return (
        <div>
            <Header />
            <div className="res-card-container">
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            <ResCard/>
            </div>
            <Footer/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root")); //Create Root
root.render(<Body/>); //Render heading element in root

