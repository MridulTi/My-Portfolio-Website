import { Link } from "react-router-dom";
import {BsFillEnvelopeFill, BsInstagram, BsLinkedin, BsMailbox, BsTwitter} from "react-icons/bs"
import { FaHeartbeat } from "react-icons/fa";
export default function Footer(){
    return(
        <div className="w-full grid md:grid-cols-1 h-[100%] md:px-16 lg:px-64 py-2 bg-background-dark divide-y-2 divide-secondary">
            <div className="grid-cols-1 md:grid grid-cols-2 px-12 md:px-0 py-4">
                <div className="text-primary py-2">
                    <h1 className="text-4xl font-bold text-primary py-4"><Link to="/">{"{%Mridul%}"}</Link></h1>
                    <ul className="flex gap-3 text-2xl">
                        {/* Twitter */}
                        <a href="https://x.com/Mridulti"><BsTwitter /></a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/mridulti/"><BsInstagram/></a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/mridulti"><BsLinkedin/></a>
                    </ul>
                    <h4 className="text-lg">Contact Me</h4>
                    <h4 className="text-lg font-medium">Email:mridultiwari2002@gmail.com</h4>

                </div>
                <div className="grid grid-cols-1 py-4 gap-4 place-items-center md:place-items-end">
                    <h2 className="text-secondary text-2xl">Wanna work with me?</h2>
                    <button href="https://www.linkedin.com/in/mridulti" className="bg-sec-sec-grad px-4 py-2 rounded-md text-lg flex place-items-center gap-2 font-semibold">Connect me on LinkedIn <BsLinkedin className="text-2xl"/></button>
                    <Link to="/Contact"><button href="#" className="bg-sec-sec-grad px-4 py-2 rounded-md text-lg flex place-items-center gap-2 font-semibold">Send me an Email <BsFillEnvelopeFill className="text-2xl"/></button></Link>
                </div>
            </div>
            <div className="grid place-items-center text-primary py-1">
                
                <h5 className="text-white text-lg tracking-widest flex gap-1 place-items-center ">Made with <span><FaHeartbeat className="text-red-500"/></span> by Mridul Tiwari</h5>
            </div>
            
        </div>
        
    )
}