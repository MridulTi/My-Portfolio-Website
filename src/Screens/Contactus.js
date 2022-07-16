import React from "react"
import Footer from "./Components/Footer.js"
import Header from "./Components/Header.js"
import "./Components/styles/contact.css"
export default function ContactUs(){
    return (
        <div onLoad={window.scrollTo(0,0)}>
            <div>
                <Header/>
            </div>
            <h1 className="header">Lets start an awesome Conversation!</h1>
            <form onSubmit={""} className="form">
                <h4>My name is</h4>
                <input
                    type="text"
                    placeholder="First Name"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                />
                <h4>My email is</h4>
                <input
                    type="email"
                    placeholder="Your Email"
                />
                <h4>I work at</h4>
                <input
                    type="text"
                    placeholder="Company"
                />
                <h4>Message</h4>
                <textarea
                    type="text"
                    placeholder="Message"
                />
                <br/>
                <button>Get in Touch</button>
            </form>
            <a href="#" ><img/></a>
            <a href="#" ><img/></a>
            <a href="#" ><img/></a>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}