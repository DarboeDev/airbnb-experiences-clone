import React from "react";

function Card(props){
    console.log(props.item);
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card-div">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img className="card-image" src={props.item.img} alt="" />
            <div className="info">
                <div className="rating">
                    <img className="star" src="../images/star.png" alt="" />
                    <p>{props.item.rate} <span>({props.item.number}).{props.item.location}</span></p>
                </div>
                <div className="info">
                        <p>{props.item.text}</p>
                    </div>
            </div>
            <div className="price">
                <p><span>From {props.item.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card