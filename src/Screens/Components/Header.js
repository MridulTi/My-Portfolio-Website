import React from "react"
import Nav from "./Navbar";
import { useLocation } from "react-router-dom";
import "./styles/header.css"
export default function Header(props){
    const [Bar,setBar]=React.useState(false)
    const changeBar=()=>{
        if(window.scrollY>114){
            setBar(true)
        }else{
            setBar(false)
        }
    }
    window.addEventListener('scroll', changeBar);
    return (
        <div className="Banner">
            <Nav/>
            <div className="banner-content">
                <div className="your-name container mx-auto">
                <p className="margin-top 10">Hi, I am </p>
                <h1>Mridul Tiwari</h1>
                </div>
                <h2>Full Stack Web Developer</h2>
                <p>I occasionally take <b>Freelance</b> opportunities</p>
                <div className="Header-connect">
                    <h4>mridultiwari2002@gmail.com</h4>
                    <button>View My Work</button>
                </div>
            </div>
            

            {/* <img src="" placeholder="Mridul|Portfolio"/> */}
        </div>
    )
}