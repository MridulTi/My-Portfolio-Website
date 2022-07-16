import React from "react"
import Footer from "./Components/Footer.js"
import Nav from "./Components/Navbar.js"
import Header from "./Components/Header.js"
import BlogsData from "./Components/List/BlogsData.js"
import Slider from "./Components/Slider.js"
import "./Components/styles/slider.css"
export default function Blogs(){

    return (
        <div className="blogs">
            <h1 align="center">BLOGS</h1>
            <hr></hr>
            <div className="Card-list">
                <Slider
                slidername="blogs-slider"
                Cardname={BlogsData}
                />
            </div>
        </div>
    )
}