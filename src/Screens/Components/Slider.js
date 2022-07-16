import React from "react"
import "./styles/slider.css"
import {MdNavigateNext,MdNavigateBefore} from "react-icons/md" 
export default function slider(props){
    const Cardname=props.Cardname;
    const slidername=props.slidername;
    const Card=Cardname.map((Data)=>{
        return(
            <div className="slider-card">
                <div id="slider-card-image"><img src={Data.image}/></div> 
                <h2 id="slider-card-title">{Data.Title}</h2>
                <p id="slider-card-description">{Data.description}</p>
            </div>
        )
    }) 
    function scrollleft(){
        let slider=document.getElementById(slidername);
        slider.scrollLeft=slider.scrollLeft-650;
    }
    function scrollright(){
        let slider=document.getElementById(slidername);
        slider.scrollLeft=slider.scrollLeft+650;
    }
    return(
        <div className="main-slider-container">
            <div id="left" className="slider-icon" onClick={scrollleft}><MdNavigateBefore/></div>
            <div id={slidername} className="slider">
                {Card}
            </div>
            <div id="right" className="slider-icon"  onClick={scrollright}><MdNavigateNext/></div>
        </div>
    )
}