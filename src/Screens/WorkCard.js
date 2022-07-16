import React from "react";
import "./Components/styles/project.css"
import ProjectData from "./ProjectData.js"
import Slider from "./Components/Slider";
export default function Card(props){
    return (
        <div className="Card-list">
            <Slider
            slidername="project-slider"
            Cardname={ProjectData}
            />
        </div>
    )
}