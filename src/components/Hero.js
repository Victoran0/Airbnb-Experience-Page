import React from 'react';
// import hero from "../images/Group 77.png"

export default function Hero() {
    return (
            <section className="hero-section">
                <img className="hero--photo" src={process.env.PUBLIC_URL + '/images/Group 77.png'} alt="Icon" />
                <h2 className='hero--header'>Online Experiences</h2>
                <p className='hero-text'>
                    Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
                </p>
            </section>
    )
}