import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import {Data} from "./components/data";

export default function App() {
    const cardData = Data.map(card => {
        return <Card 
                    key={card.id}
                    {...card}
                    />
    })
    return (
        <div>
            <Navbar />
            <Hero /> 
            <div className="card--container">
                {cardData}
            </div>
        </div>
    )
}