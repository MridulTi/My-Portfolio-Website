
import Music from "../../assets/avatar/music/music.gif"
import Side1 from "../../assets/avatar/music/side_1.png"
import Side2 from "../../assets/avatar/music/side_2.png"
import Music2 from "../../assets/avatar/music/music_2.png"
import Music3 from "../../assets/avatar/music/music_3.png"
import Smile from "../../assets/avatar/music/smile.png"
import React from "react"
import { Contact, Cs, Expertise, WP } from "../../Components/Cards"
import { CS, CWP, resource } from "../../assets/lists/Cards"
import { Reveal } from "../../Components/Reveal"
import Typewriter from "typewriter-effect"
export default function Code(){

    window.scroll(0,0)

    
    const codeWP=CWP.map((data)=>{
        return(
            <WP
            {...data}
            />
        )
    })
    const cs=CS.map((data)=>{
        return(
            <Cs
            {...data}
            />
        )
    })
    const project=resource.map(data=>{
        return(
            <Expertise
            {...data}
            />
        )
    })
    return(
        <div className="py-16 grid place-items-center gap-10">
            <div className="grid grid-cols-2 px-2 xl:px-24 place-items-center">
                
                <div className="lg:w-4/5 xl:w-3/4 text-tertiary">
                    <div  className="text-6xl font-semibold">
                    <Typewriter
                    onInit={(typewriter)=>{
                        typewriter
                            .typeString("Elevating Ideas Through Code: Explore My Projects.")
                            .pauseFor(10000)
                            .start();
                    }}
                    />
                    </div>
                    
                    {/* <h1 className="text-7xl font-semibold"></h1> */}
                    <p className="text-2xl py-12">Dive into my curated projects, where innovation meets execution in web apps and interactive experiences, shaping the digital landscape one code at a time.</p>
                </div>
                <img src={Music} alt="happy" className="lg:w-[52vw] xl:w-[45vw]"/>
            </div>
                {/* WORK PROCESS */}
                <h1 className="text-3xl py-5 font-semibold">My Work Process</h1>
                {codeWP}
                {/* CASE STUDIES */}
            <div className="py-12 grid place-items-center">
                <h1 className=" text-3xl py-5 font-semibold text-tertiary">PROJECTS.</h1>
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {project}
                </div>
            </div>
            {/* <div className="w-2/3 grid place-items-center">
                <h1 className=" text-3xl py-5 font-semibold text-tertiary">ACHIVEMENTS.</h1>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                    {cs}
                </div>
            </div> */}
            <Contact/>

        </div>
    )
}