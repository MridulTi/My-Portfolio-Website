import Happy from "../../assets/avatar/happy/happy.gif"
import HappyStar from "../../assets/avatar/happy/happy_star.png"
import HappyCat from "../../assets/avatar/happy/happy_cat.png"
import HappyB from "../../assets/avatar/happy/happy_blush.png"
import HappyB1 from "../../assets/avatar/happy/happy_blush1.png"
import HappyB2 from "../../assets/avatar/happy/happy_blush2.png"
import HappyN from "../../assets/avatar/happy/happy_no.png"
import React from "react"
import { Contact, Cs, Expertise, WP } from "../../Components/Cards"
import { CS, NCWP, resource } from "../../assets/lists/Cards"
import TypewriterComponent from "typewriter-effect"
export default function NonCode(){
    window.scroll(0, 0)

    
    const NcodeWP=NCWP.map((data)=>{
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
            <div className="grid md:grid-cols-2 md:px-24 place-items-center">
                <img src={Happy} alt="happy" className="w-[45vw]"/>
                
                <div className="w-3/4 text-tertiary">
                <div  className="text-6xl font-semibold">
                    <TypewriterComponent
                    onInit={(typewriter)=>{
                        typewriter
                            .typeString("Creating phenomenal website designs that leave a lasting impression.")
                            .pauseFor(10000)
                            .start();
                    }}
                    />
                    </div>
                    
                    {/* <h1 className="text-7xl font-semibold">.</h1> */}
                    <p className="text-2xl py-12">Harnessing the magic of design, I craft extraordinary website experiences that captivate and inspire. With an unwavering focus on aesthetics and user-centered principles, my creations elevate brands and leave a lasting impact on every visitor.</p>
                </div>
            </div>
                {/* WORK PROCESS */}
                <h1 className="text-3xl py-5 font-semibold">My Design Process</h1>
                {NcodeWP}
                {/* CASE STUDIES */}
            <div className="py-12 grid place-items-center">
                <h1 className=" text-3xl py-5 font-semibold text-tertiary">Case Studies</h1>
                <div className="grid grid-cols-3 gap-10">
                    {project}
                </div>
            </div>
            {/* <div className="w-1/2">
                <h1 className=" text-3xl py-5 font-semibold text-tertiary">Designing Portfolios.</h1>
                <div className="grid grid-cols-3 gap-10">
                    {cs}
                </div>
            </div>

            <div className="w-1/2">
                <h1 className=" text-3xl py-5 font-semibold text-tertiary">Designing Landing Pages.</h1>
                <div className="grid grid-cols-3 gap-10">
                    {cs}
                </div>
            </div>
            <div className="w-1/2">
                <h1 className=" text-3xl py-5 font-semibold text-tertiary">Designing E-commerce</h1>
                <div className="grid grid-cols-3 gap-10">
                    {cs}
                </div>
            </div> */}
            <Contact/>

        </div>
    )
}