import React from 'react';

export default function Card(props) {
    let BadgeText
    if (props.openSpots === 0) {
        BadgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        BadgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {BadgeText && <div className='card-badge'>{BadgeText}</div>}
            <img src={process.env.PUBLIC_URL + `${props.coverImg}`} alt="card--1mage" className='card--image' />
            <div className='card--stats'>
                <img src={process.env.PUBLIC_URL + '/images/Star.png'} alt="star" className='card--star'/>
                <span> {props.stats.rating}  </span>
                <span className='gray'>({props.stats.reviewCount}) • </span>
                <span className='gray'> {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}