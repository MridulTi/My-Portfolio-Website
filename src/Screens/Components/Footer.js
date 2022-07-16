import React from "react"
import {Link} from "react-router-dom"
import Foot from "./Foot.js"
import "./styles/footer.css"
export default function Footer(){
    return (
        <div  className="Footimp">
            <div>
                <div className="foot">
                    <ul>
                        <li><Link to="/about" className="Link">About</Link></li>
                        <li><Link to="/blogs" className="Link">Blogs</Link></li>
                        <li><Link to="/work" className="Link">Projects</Link></li>
                        <li><Link to="/resume" className="Link">Resume</Link></li>
                    </ul>
                </div>
                <div className="FootBtn">
                    <h3 className="red">Have an Opportunity</h3>
                    <h3>or</h3>
                    <h3 className="blue">Wanna Work Together?</h3>
                    <button>Send an email <img src="" alt=""/></button>
                </div>
            </div>
            <hr/>
            <Foot/>
        </div>
    )
}