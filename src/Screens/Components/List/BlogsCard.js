import React from "react";
import "./blogs.css"
export default function Card(props){
    return (
        <div className="Blogs">
            <img src={props.image}/>
            <h3>{props.Title}</h3>
            <h4>{props.time}</h4>
        </div>
    )
}