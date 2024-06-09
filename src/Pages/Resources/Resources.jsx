import { useParams } from "react-router-dom";
import { Contact } from "../../Components/Cards";
import {FiExternalLink} from "react-icons/fi"
import { resource } from "../../assets/lists/Cards";
import TypewriterComponent from "typewriter-effect";

export default function Resources(){
    window.scrollTo(0, 0)
    const { Slugs } = useParams();
    const event = resource.find(i => i.slugs === Slugs);
    const{heading,tagline,intro,problem,img,solution,goals,IMGs,conclusion,github,CONC}=event;
    return(
        <div className="main py-20 grid gap-16 place-items-center">
            <div className=" bg-neutral-gray p-24 lg:px-72 lg:py-56 xl:p-52 aspect-video font-semibold text-3xl "
                style={{
                    backgroundImage:`url(${img})`,
                    backgroundPosition:"center",
                    boxShadow:"5px 5px 10px 2px rgba(0, 0, 0,0.4)",
                    backgroundSize:"cover"
                }}
            ></div>
            <div  className="w-4/5 xl:w-1/2">
                <a href={github} target="_blank_"><p className="flex gap-2 place-items-center font-semibold text-xl text-sky-600">Github<FiExternalLink/></p></a>
                <h1 className="text-2xl font-semibold text-center">OVERVIEW.</h1>
                <div className="text-4xl md:text-5xl pt-4 font-extrabold text-center">
                    <TypewriterComponent
                        onInit={(typewriter)=>{
                            typewriter
                                .typeString(heading)
                                .start()  
                        }}
                    />
                </div>
                <p className="md:text-lg py-2 text-center">{tagline}</p>
            </div>
            
            <div className="w-4/5 xl:w-1/2">
                <h1 className="text-2xl font-semibold">INTRODUCTION.</h1>
                <p>{intro}</p>
            </div>
            <div className="w-4/5 xl:w-1/2">
                <h1 className="text-2xl font-semibold">PROBLEM.</h1>
                <p>{problem}</p>
            </div>
            <div className="w-4/5 xl:w-1/2">
                <h1 className="text-2xl font-semibold">MY SOLUTION.</h1>
                <p>{solution}</p>
            </div>
            {IMGs &&<div className="grid grid-cols-2 gap-6">
                <div className="p-32 bg-neutral-gray rounded-3xl"></div>
                <div className="p-32 bg-neutral-gray rounded-3xl"></div>
                <div className="p-32 bg-neutral-gray rounded-3xl"></div>
                <div className="p-32 bg-neutral-gray rounded-3xl"></div>
            </div>}
            {goals&& <div className="w-4/5 xl:w-1/2">
                <h1 className="text-2xl font-semibold">GOALS.</h1>
                <div className="grid place-items-center gap-12">
                    <ul>
                    {goals.map(data=>{
                        return(
                            <li className="py-2 marker:text-brown-400 list-disc pl-2 space-y-3 text-lg">{data}</li>
                        )
                    })}
                    </ul>
                </div>
            </div>}
            <div className="w-4/5 xl:w-1/2">
                <h1 className="text-2xl font-semibold">CONCLUSION.</h1>
                <p>{conclusion}</p>
            </div>
            {CONC &&<div className=" bg-neutral-gray p-96 font-semibold text-3xl w-1/4 rounded-3xl"></div>}
            <Contact/>        
        </div>
    )
}