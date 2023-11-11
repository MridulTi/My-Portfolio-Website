import React from "react";
import { blogs } from "../../assets/lists/Cards";
import { BlogsC} from "../../Components/Cards";
export default function Blogs(){
    window.scrollTo(0, 0)
    const project=blogs.map(data=>{
        return(
            <BlogsC
            {...data}
            />
        )
    })
    return(
        <div className="main h-screen py-20">
            <div className=" grid gap-10 place-items-center">
            <h1 className=" text-5xl font-semibold text-tertiary" >BLOGS.</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:px-96 place-items-center gap-1">
                {project}
                {/* {project} */}
            </div>
            </div>
            
        </div>
    )
}