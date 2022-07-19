import React from "react"
import Footer from "./Components/Footer.js"
import "./Components/styles/about.css"
import Nav from "./Components/NAV.js"
import Header from "./Components/Header.js"
import AboutMenu from "./aboutmenu.js"
export default function About(){
    document.title="Mridul Tiwari | About";

    return (
        <div onLoad={window.scrollTo(0,0)}>
            <div className="main-body">
                <div className="BANNER">
                    <Nav/>
                    <img src="Images/1500x500.jpg" placeholder="Image banner"/>
                </div>
                <div className="MENU">            
                    <div>
                        <AboutMenu/>
                    </div>
                    <div className="content">
                        <div>
                            <h2>About me in 10 sec.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="Now">
                            <h2>Now</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="Timeline">
                            <h2>Timeline</h2>
                            <ul>
                                <li>
                                    <h4>2018</h4>
                                    <p>Learnt my very First Language i.e. Python</p>
                                </li>
                                <li>
                                    <h4>2018</h4>
                                    <p>Learnt my very First Language</p>
                                </li>
                                <li>
                                    <h4>2018</h4>
                                    <p>Learnt my very First Language</p>
                                </li>
                                <li>
                                    <h4>2018</h4>
                                    <p>Learnt my very First Language</p>
                                </li>
                                <li>
                                    <h4>2018</h4>
                                    <p>Learnt my very First Language</p>
                                </li>
                            </ul>
                        </div>
                        <div className="Online">
                            <h2>Find me Online</h2>
                            <p>You can fine me on <a href="#">Twitter</a>,<a href="#">Instagram</a>,<a href="#">LinkedIn</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}