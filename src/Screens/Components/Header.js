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
            <div className="py-80 text-4xl ">
                <div className="py-0.5 flex gap-4 justify-center tracking-wide leading-5">
                    <p className=" yourname">Hi, I am </p>
                    <h1 className="astred  yourname">Mridul Tiwari</h1>
                </div>
                <h2 className="text-5xl font-semibold tracking-tight">Full Stack Web Developer</h2>
                <p className="text-2xl">I occasionally take <b>Freelance</b> opportunities</p>
                <div className="text-lg justify-center flex gap-24 w-screen my-12" >
                    <h4>mridultiwari2002@gmail.com</h4>
                    <button className="btn w-32">View My Work</button>
                </div>
            </div>
            

            {/* <img src="" placeholder="Mridul|Portfolio"/> */}
        </div>
    )
}