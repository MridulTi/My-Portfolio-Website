import React from "react"
import { parsePath } from "react-router-dom"
export default function ServiceCard(props){
    return(
        <div>
            <img src={props.serviceimage} placeholder="image"/>
            <h4>{props.title}</h4>
            <p>{props.info}</p>
        </div>
    )
}