import React from "react"
import {MdOutlineMail} from "react-icons/md";
import ServiceCard from "./Components/List/ServiceCard"
import SerData from "./Components/List/SerData"
import Slider from "./Components/Slider.js"
import "./Components/styles/services.css"
export default function Services(){
    return(
        <div className="services">
            <h1 className="text-sm">SERVICES</h1>
            <hr className="text-center"></hr>
            <div className="service-content-list">
                <div className="service-content-list-div">
                    <div></div>
                    <h4>Front-End Development</h4>
                    <p>I can be part of your remote team as a frontend engineer adding new features, improving user experience, and helping you reach your goals.</p>
                </div>
                <div className="service-content-list-div">
                    <div></div>
                    <h4>Landing Page + Blog</h4>
                    <p>I build fast, SEO-friendly and fully-customized landing pages and blogs that you can easily edit yourself - no engineer required.</p>
                </div>
            </div>
            <div className="w-screen text-center">
                <button className="btn w-40">Inquire by email <MdOutlineMail className="font-mail"/></button>
            </div>
        </div>
    )
}