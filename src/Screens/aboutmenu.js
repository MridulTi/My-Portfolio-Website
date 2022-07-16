import React from "react"
export default function Menu(){
    function Aboutme(){
        window.scrollTo(0,500);
    }
    function Now(){
        window.scrollTo(0,750);
    }
    function Time(){
        window.scrollTo(0,950);
    }
    function Online(){
        window.scrollTo(0,1500);
        
    }
    return(
        <div className="Menu">
            <ul className="Menu-list">
                <li><a onClick={Aboutme}>About me in 10 sec.</a></li>
                <li><a onClick={Now}>Now</a></li>
                <li><a onClick={Time}>TimeLine</a></li>
                <li><a onClick={Online}>Fine Me Online</a></li>
            </ul>
        </div>
    )
}