import React, { useRef,useEffect } from "react"
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub, AiFillMail } from 'react-icons/ai'
import Peek from "../../assets/avatar/peek.png"
import Work from "../../assets/avatar/work/work.gif"
import DUCK from "../../assets/avatar/wall_peekk.gif"
import { motion, transform, useAnimation, useTransform, useViewportScroll, } from "framer-motion"
import wallPeek from "../../assets/avatar/wall_peek.png"
import { Link } from "react-router-dom"
import { contribute, expertise, resource, services, skills } from "../../assets/lists/Cards"
import { Cont, Contact, Expertise, Res, Services, Skills } from "../../Components/Cards"
import { useInView } from "react-intersection-observer";
import Mridul from "../../assets/avatar/Mridul.webp"
import TypewriterComponent from "typewriter-effect"
export default function Home() {
    
    function handlescrolltop(string){
        document.getElementById(string).scrollIntoView({behavior: 'smooth',block:"start"});
    }
    function handleclick() {

        if (Heroimg < Work.length - 1) {
            setHero((Heroimg) => Heroimg + 1)

        } else {
            setHero(0)
        }
    }
    const service = services.map((data) => {
        return (
            <Services
                {...data}
            />
        )
    })
    const skill = skills.map((data) => {
        return (
            <Skills
                {...data}
            />
        )
    })
    const resources = resource.slice(0, 3).map((data) => {
        return (
            <Expertise
                {...data}
            />
        )
    })
    const expert = expertise.map((data) => {
        return (
            <Res
                {...data}
            />
        )
    })
    const contri = contribute.map((data) => {
        return (
            <Cont
                {...data}
            />
        )
    })
    const constraintRef=useRef(null)
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress,[0,-10],[0,1]);
    const styles={
        header:{
            backgroundImage:`url(${Mridul})`,
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
        },
        content:{
        }
        
    }
    return (
        <div className="pb-12">
            
            <div className="grid gap-y-32">
                {/* About */}
                <div style={styles.header}>
                    <div style={styles.content}>
                    <div className="h-[100vh] grid place-items-center ">
                        <div className="text-center">
                        <h5 className="text-xl  font-bold tracking-widest leading-3">Hi! I am</h5>
                        <h2 className="text-3xl md:text-5xl font-extrabold leading-10">MRIDUL TIWARI</h2>
                        <div className="text-2xl  font-bold leading-10 tracking-wider">
                            <TypewriterComponent
                                onInit={(typewriter)=>{
                                    typewriter
                                        .typeString("Full Stack Developer")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("Artist")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("Web Developer")
                                        .start()
                                }}
                            />
                        </div>
                        <motion.button onClick={()=>handlescrolltop("about")} className="px-10 py-3 drop-shadow-lg my-2 font-semibold text-[#2B2A4C] bg-sec-sec-grad text-xl tracking-widest "
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 0.95 }}
                        >View More!</motion.button>
                        </div>
                        
                    </div >
                    </div>
                    
                    <div id="about" className="h-[100vh] grid place-items-center ">
                    {/* <Bg_Particle/> */}
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-rows-2 px-12 md:px-24 md:gap-10 place-items-center md:py-32">
                    <div className="xl:w-[30vw]">
                        <h5 className="text-xl  font-bold tracking-widest leading-3">Hi! I am</h5>
                        <h2 className="text-2xl xl:text-5xl font-extrabold leading-10 ">MRIDUL TIWARI</h2>
                        <h5 className="text-lg  font-bold leading-10 tracking-wider">Software Engineer</h5>
                        <p className="text-lg lg:text-md xl:tracking-wider lg:tracking-normal">
                            captivated by UI Design and Frontend Development. My path is marked by hackathons, dynamic projects in JavaScript and Python, and an unyielding eye for detail. My creations blend aesthetics with functionality, and I thrive on staying ahead of trends. Join me on this journey of innovation and meticulous craftsmanship that shapes the digital landscape.So, welcome to my world of innovation, precision, and boundless enthusiasm. Join me as we embark on a journey where lines of code transform into captivating experiences, and technology becomes a canvas for limitless creativity.
                        </p>
                        <Link to="/Contact
                        "><motion.button className="px-8 my-6 py-2 text-[#2B2A4C] drop-shadow-lg bg-sec-sec-grad text-lg font-bold tracking-widest "
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 0.95 }}
                        >Hire Me!</motion.button></Link>
                        <div className="flex text-2xl gap-6 pt-4">
                            <a href="https://www.linkedin.com/in/mridul-tiwari-001185216/" target="_blank_"><AiFillLinkedin/></a>
                            <a href="https://twitter.com/Mridulti" target="_blank_"><AiOutlineTwitter /></a>
                            <a href="https://github.com/MridulTi" target="_blank_"><AiFillGithub/></a>
                            <Link to="/Contact"><AiFillMail/></Link>

                        </div>
                    </div>
                    <motion.div className="hidden md:block xl:p-52 lg:p-46 md:p-48 p-48 bg-neutral-gray rounded-2xl rotate-6"
                        style={{
                            backgroundImage: `url(${Work})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            boxShadow:"15px 25px 24px 2px rgba(0, 0, 0,0.4)"
                        }}
                        drag
                        dragConstraints={{ left: 0, right: 0 ,top:0, bottom:0}}
                    >
                        {/* <img src={wallPeek} className="w-2/3"/> */}
                    </motion.div>
                    
                </div>
                {/* <h1 className="text-4xl font-bold text-center pt-24">ABOUT ME!</h1> */}
                

                    </div> 
                </div>
                
                {/* Services */}
                {/* <div className="grid place-items-center gap-10">
                    <h1 className="text-4xl font-bold">Services</h1>
                    <div className="grid grid-cols-3 place-items-center gap-10 w-1/2">
                        {service}
                    </div>
                </div> */}
                {/* Skills */}
                {/* <div className="px-24 grid grid-cols-1 place-items-center">
                    <h1 className="text-4xl font-bold">Skills</h1>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 place-items-center xl:grid-cols-5">
                        {skill}
                    </div>
                </div> */}
                {/* Contribution */}
                <div className="px-24 grid grid-cols-1 gap-10 place-items-center">
                    <h1 className="text-4xl font-bold">Contribution</h1>
                    <div className="grid grid-rows-1 xl:grid-cols-2 gap-12 place-items-center">
                        {contri}
                    </div>
                    {/* <button className="px-8 py-2 bg-sec-sec-grad ">See More!</button> */}

                </div>
                {/* Projects */}
                <div className="px-24 grid grid-cols-1 gap-10 place-items-center">
                    <h1 className="text-4xl font-bold">Projects</h1>
                    <div className="grid grid-rows-3 xl:grid-cols-3 xl:grid-rows-1 gap-16 place-items-center">
                        {resources}
                    </div>
                    <Link to="/Projects"><motion.button whileHover={{scale:1.05}} whileTap={{ scale: 0.8 }} className="px-6 py-2 md:px-12 md:py-6 text-xl md:text-2xl lg:px-8 lg:py-1 drop-shadow-lg bg-sec-sec-grad lg:text-md font-semibold text-white ">See More!</motion.button></Link>
                </div>
                {/* Expertise */}
                <div className="px-24 grid grid-cols-1 gap-10 place-items-center">
                    <h1 className="hidden sm:block text-4xl font-bold">Expertise</h1>
                    <div className="hidden sm:block grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-12">
                        {expert}
                    </div>
                    <img src={DUCK} className="aspect-video md:h-80" />
                
                </div>
                
                
            </div>


        </div>
    )
}