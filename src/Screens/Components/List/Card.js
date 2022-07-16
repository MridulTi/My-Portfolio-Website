import React from "react"
export default function Card(props){
    const [card,setcard]=React.useState({
        image:props.img,
        Title:props.title,
        Time:props.time,
    })
    return (
        <div className="cardinfo">
            <img src={card.image} alt="card-image"/>
            <h2>{card.Title}</h2>
            <h4>{card.Time}</h4>
        </div>
    )
}