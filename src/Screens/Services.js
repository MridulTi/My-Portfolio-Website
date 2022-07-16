import React from "react"
import ServiceCard from "./Components/List/ServiceCard"
import SerData from "./Components/List/SerData"
import Slider from "./Components/Slider.js"
import "./Components/styles/services.css"
export default function Services(){
    return(
        <div className="services">
            <h1>SERVICES</h1>
            <hr></hr>
            <div className="service-content-list">
                <div>
                    <div> </div>
                    <h4>Front-End Development</h4>
                    <p>I can be part of your remote team as a frontend engineer adding new features, improving user experience, and helping you reach your goals.</p>
                </div>
                <div>
                    <div></div>
                    <h4>Landing Page + Blog</h4>
                    <p>I build fast, SEO-friendly and fully-customized landing pages and blogs that you can easily edit yourself - no engineer required.</p>
                </div>
            </div>
            <button>Inquire by email M</button>
        </div>
    )
}