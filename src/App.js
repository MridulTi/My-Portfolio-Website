import React from "react"
import "./index.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Screens/Home.js"
import About from "./Screens/About.js"
import ContactUs from "./Screens/Contactus.js"
import Works from "./Screens/Works.js"
import NotFound from "./Screens/NotFound.js"

export default function App(){
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/about" element={<About/>}/>
                <Route  path="/works" element={<Works/>}/>S
                <Route  path="/contactus" element={<ContactUs/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    )
}