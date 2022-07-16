import React from "react"
import "./styles/Myself.css"
import Image from "./MyselfImage.js"
export default function Myself(){
    let greeting="";
    const d=new Date();
    if(d.getHours()>12 && d.getHours()<6){
        if(d.getHours()<17){
            greeting="Afternoon";
        }else if(d.getHours()<20){
            greeting="Evening";
        }else{
            greeting="Night";
        }
    }else if(d.getHours()==12){
        greeting="Noon";
    }else{
        greeting="Morning"
    }
    return (
        <div>
            <div className="intro">
                <Image/>
                <div className="Myself">
                    <h2>Good {greeting}!</h2>
                    <p>Hi, it's Mridul Tiwari from Delhi-NCR, India! I’m a Full-Stack Developer and an Open Source Enthusiast. In short, I love creating and building stuff. I am also keen to learn new Tech Stack all the time. I do Freelance work of Website Development as well. You can find more about me from here.<br/>So,✨ Welcome to my little slice of the internet—I hope you find something useful!</p>
                </div>
            </div>
        </div>
    )
}