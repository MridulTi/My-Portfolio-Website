import React from "react"
import Nav from "./Components/Navbar.js"
import {Link} from "react-router-dom"
import Header from "./Components/Header.js"

import Blogs from "./Blogs.js"
import Footer from "./Components/Footer.js"
import Skills from "./Skills.js"
import Services from "./Services.js"
import Works from "./Works.js"
export default function Home(){
    return (
        <div onLoad={window.scrollTo(0,0)}>
            <div>
            </div>
            <div className="Home-Body">
                <Header/>
                <Blogs/>
                <Skills/>
                <Services/>
                <Works/>
                
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}