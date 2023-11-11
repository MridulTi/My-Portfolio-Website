import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
export default function Navbar(){
    const [shouldShowActions,setShouldShowActions]=React.useState(false)
    const [lastYPos,setLastYPos]=React.useState(0);
    React.useEffect(()=>{
        function handleScroll(){
            let yPos=window.scrollY;
            let isScrollingUp=yPos < lastYPos;
            setShouldShowActions(isScrollingUp);
            setLastYPos(yPos);
        }
        window.addEventListener('scroll',handleScroll,false);
        return()=>{
            window.removeEventListener('scroll',handleScroll,false);
        };
    },[lastYPos]);
    return(
            <motion.div animate={{opacity:shouldShowActions?1:0}} transition={{opacity:{duration:0.2}}} initial={{opacity:1}}className="fixed top-0 grid grid-cols-3 place-items-center z-50 text-lg backdrop-grayscale backdrop-blur-md w-full border-b-2 py-3">
                <h1 className="text-xl font-semibold logo"><Link to="/">{"{%Mridul%}"}</Link></h1>
                <ul className="flex gap-10">
                    <Link to="/Projects"><li>Projects</li></Link>
                    {/* <li></li> */}
                    <Link to="/blogs"><li>Blogs</li></Link>
                </ul>
                <a href="https://drive.google.com/file/d/1uJ4TpLI_-36ihZFNxo3MdIkK1l9SQTWK/view?usp=drive_link" target="_blank_"><button className="top-4 bg-sec-sec-grad px-8 text-tertiary py-2 drop-shadow-md w-fit text-md tracking-wider ">Resume</button></a>
        </motion.div>
    )
}