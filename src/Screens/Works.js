import React from "react"
import Headers from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import Theme1 from "./Components/List/Theme1.js"
import Slider from "./Components/Slider.js"
import "./Components/styles/project.css"
export default function Works(){
    return (
        <div className="projects">
            <h1>PROJECTS</h1>
            <hr></hr>
            <div className="project-content">
                <div className="collage-index">
                    <h3>All</h3>
                    <h3>React-Js</h3>
                    <h3>Node-Js</h3>
                    <h3>Javascript</h3>
                </div>
                <button>See More</button>
            </div>
        </div>
    )
}