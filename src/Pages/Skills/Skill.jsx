import { useParams } from "react-router-dom";
import { resource, skills } from "../../assets/lists/Cards";
import { Expertise, Skills } from "../../Components/Cards";
import { useState } from "react";

export default function Skill(){
    window.scrollTo(0,0)
    

    const skill = skills.map((data) => {
        return (
            <Skills
                {...data}
            />
        )
    })

    const { Slugs } = useParams();
    const event = skills.find(i => i.slugs === Slugs);
    const{heading,tagline,slugs,intro,img}=event;

    const FilterData=resource.filter(item=>item.lang.includes(slugs));
    const proj=FilterData.map(data=>{
        return(
            <Expertise
            {...data}
            />
        )
    })

    return(
        <div className="main py-20 grid gap-16 place-items-center">
            <div className="w-1/2">
                <div className="p-16 font-semibold w-[5vw] text-3xl rounded-full"
                    style={{
                        backgroundImage:`url(${img})`,
                        backgroundPosition:"center",
                        boxShadow:"5px 5px 10px 2px rgba(0, 0, 0,0.4)",
                        backgroundSize:"40%",
                        backgroundRepeat:"no-repeat"
                    }}
                ></div>
                <div  className="w-1/2">
                    <h1 className="text-2xl pt-8 font-semibold">OVERVIEW.</h1>
                    <h1 className="text-5xl pt-5">{heading}</h1>
                    <p className="text-xl font-semibold py-2">{tagline}</p>
                    <p className="text-lg py-2">{intro}</p>
                </div>
            </div>
            <div>
                
            </div>
            <h1 className="text-3xl font-semibold">PROJECTS.</h1>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-8">
                {proj}

            </div>
            <div className="px-24 grid grid-cols-1 place-items-center">
                    <h1 className="text-4xl font-bold">Skills</h1>
                    <div className="grid grid-cols-5 place-items-center xl:px-96">
                        {skill}
                    </div>
                </div>
            
            
            
        </div>
    )
}