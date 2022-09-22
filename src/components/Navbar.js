import React from "react";
// import airbnb from "../images/airbnb 1.png";


export default function Navbar() {
    return (
            <nav className="nav">
                <img className="logo" src={process.env.PUBLIC_URL + '/images/airbnb 1.png'} alt="Airbnb Logo" />

            </nav>
    )
}