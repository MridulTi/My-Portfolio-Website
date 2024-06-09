import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Reveal } from "./Reveal"
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component"
export const Services=function(props){
    return(
        <div className="bg-neutral-gray py-8 px-8 grid place-items-center text-center gap-2 rounded-2xl">
            <div className="bg-primary w-16 h-16 rounded-full">

            </div>
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <p className="text-sm">{props.info}</p>
        </div>
    )
}
export const Skills=function(props){
    return(
        <Link to={`/Skills/${props.slugs}`}>
            <div
            className="p-2 grid place-items-center gap-2 text-center rounded-lg w-1/2"
            >
            <motion.div
            whileHover={{style:1.1}}
            whileTap={{style:0.8}}
             className="border border-gray-300 aspect-square w-24 rounded-full">
                <img src={props.img} className="p-8"/>                
            </motion.div>
            <h1 className="font-semibold tracking-widest">{props.title}</h1>
            </div>
        </Link>
        
    )
}
export const Expertise=function(props){
    return(
        <Link to={`/Resources/${props.slugs}`}>
            <motion.div className="relative aspect-video w-80 md:w-[30rem] lg:w-[20rem] text-white grid place-items-center text-center rounded-xl" style={{
                backgroundImage:`linear-gradient(to bottom,#ff886009 55%, #E4CAA9),url(${props.img})`,
                backgroundPosition:"top",
                backgroundRepeat:"no-repeat",
                boxShadow:"5px 5px 10px 2px rgba(0, 0, 0,0.4)",
                backgroundSize:"cover"
                }}
                whileHover={{ marginTop:"-5%",marginBottom:"5%"}}
                whileTap={{
                    scale: 0.8,
                }}>
                <div className="absolute left-5 bottom-5 text-left">
                <h1 className="text-2xl lg:text-xl font-semibold ">{props.title}</h1>
                <p className="text-sm ">{props.tag}</p>
                </div>
                
            </motion.div>
        </Link>
    )
}
export const Res=function(props){
    return(
        <Link to={props.link}>
            <motion.div className="bg-neutral-gray relative w-80 h-72 text-white grid place-items-end p-4 text-center rounded-xl" 
            style={{
                backgroundImage:`linear-gradient(to bottom,#ff886009 50%, #E4CAA9),url(${props.img})`,
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                boxShadow:"5px 5px 10px 2px rgba(0, 0, 0,0.4)",
                backgroundSize:"cover"
                }}
                whileHover={{ marginTop:"-5%",marginBottom:"5%"}}
                whileTap={{
                    scale: 0.8,
                }}
                >
                {/* <div className="z-10 w-full h-full bg-neutral-gray"></div> */}
                <h1 className="text-2xl font-semibold absolute left-5 bottom-5">{props.title}</h1>
                {/* <p className="text-sm">{props.lang}</p> */}
            </motion.div>
        </Link>
    )
}
export const Cont=function(props){
    return(
            <a href={props.href} >
                <motion.div className="bg-neutral-gray relative w-72 md:w-96 h-64 md:h-72 text-white grid place-items-end p-4 rounded-xl" 
            style={{
                backgroundImage:`linear-gradient(to bottom,#ff886009 20%, #402E32),url(${props.img})`,
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                boxShadow:"5px 5px 10px 2px rgba(0, 0, 0,0.4)",
                backgroundSize:"cover"
                }}
                whileHover={{ marginTop:"-5%",marginBottom:"5%"}}
                whileTap={{
                    scale: 0.8,
                }}
                >
                {/* <div className="z-10 w-full h-full bg-neutral-gray"></div> */}
                <h1 className="text-2xl font-semibold absolute left-5 bottom-5">{props.title}</h1>
                {/* <h1 className="text-xs  absolute left-5 bottom-5">{props.info}</h1> */}
                {/* <p className="text-sm">{props.lang}</p> */}
            </motion.div>
            </a>
    )
}
export const BlogsC=function(props){
    return(
            <a href={props.href} target="_blank_" >
                <div className="relative px-4 md:px-24 lg:px-6">
                <motion.div className="bg-transparent relative h-fit text-white grid place-items-end" 
            style={{
                // backgroundImage:`linear-gradient(to bottom,#ff886009 20%, #402E32),url(${props.img})`,
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                boxShadow:"5px 5px 10px 2px rgba(0, 0, 0,0.4)",
                backgroundSize:"cover"
                }}
                whileHover={{ marginTop:"-5%",marginBottom:"5%"}}
                whileTap={{
                    scale: 0.8,
                }}
                >
                <LazyLoadImage src={props.img} className="h-fit rounded-inherit" />
                {/* <div className="z-10 w-full h-full bg-neutral-gray"></div> */}
                <h1 className="text-2xl font-semibold absolute left-5 bottom-5">{props.title}</h1>
                {/* <h1 className="text-xs  absolute left-5 bottom-5">{props.info}</h1> */}
                {/* <p className="text-sm">{props.lang}</p> */}
            </motion.div>
            <p className="text-sm py-4 text-gray-500 px-2">{props.info}</p>

                </div>
                
            </a>
    )
}
export const Posts=function(props){
    return(
        <div className="bg-neutral-gray py-8 px-12 grid place-items-center text-center gap-2 rounded-lg">
            <div className="bg-primary w-16 h-16 rounded-full">

            </div>
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <p className="text-sm">{props.info}</p>
        </div>
    )
}
export const Contact=function(){
    return(
        <div className="grid place-items-center bg-white drop-shadow-2xl gap-2 py-5 px-5 rounded-3xl">
            <h1 className="font-semibold text-2xl">Got a Project? Let's Talk</h1>
            <p className="md:w-1/2 text-center">I’m available on selected freelance projects and speaking engagements. My time books quickly but I will get back to you within 3 working days. Thank you!</p>
            <Link to="/Contact"><motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="top-4 bg-sec-sec-grad px-8 text-tertiary py-2 rounded-3xl w-fit text-md text-white">Contact</motion.button></Link>

        </div>
    )
}
export const WP=function(props){
    return(
        <div className=" xl:px-64">
            {props.h1 &&<div className="grid grid-cols-2 place-items-center">
                <div className="p-48 rounded-3xl bg-neutral-gray"
                    style={{
                        backgroundImage:`url(${props.IMG1})`,
                        backgroundSize:"cover",
                        backgroundPosition:"center"
                    }}
                ></div>
                <Reveal>
                <div>
                    <h1 className="text-center font-semibold text-xl py-2 px-32">{props.h1}</h1>
                    <p className="text-center text-lg px-32">{props.info1}</p>
                </div>
                </Reveal>
            </div>}
            {props.h2 && <div className="grid grid-cols-2 place-items-center">
                <Reveal>
                <div>
                    <h1 className="text-center font-semibold text-xl py-2 px-32">{props.h2}</h1>
                    <p className="text-center text-lg px-32">{props.info2}</p>
                </div>
                </Reveal>
                <div className="p-48 rounded-3xl bg-neutral-gray"style={{
                        backgroundImage:`url(${props.IMG2})`,
                        backgroundSize:"cover",
                        backgroundPosition:"center"
                    }}></div>
            </div>}
           
        </div>
    )
}
export const Cs=function(props){
    return(
        <div className="bg-neutral-gray text-center p-12 rounded-3xl">
            <h1 className="font-semibold text-xl">{props.title}</h1>
            <p className="text-sm">{props.info}</p>
        </div>
    )
}