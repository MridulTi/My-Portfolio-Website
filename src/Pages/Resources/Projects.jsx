import React from "react";
import { resource } from "../../assets/lists/Cards";
import { Expertise } from "../../Components/Cards";
export default function Projects(){
    window.scrollTo(0, 0)
    const project=resource.map(data=>{
        return(
            <Expertise
            {...data}
            />
        )
    })
    return(
        <div className="main min-h-screen py-20">
            <div className=" grid gap-10 place-items-center">
            <h1 className=" text-5xl font-semibold text-tertiary">PROJECTS.</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {project}
                
            </div>
            </div>
            
        </div>
    )
}