import { Link } from "react-router-dom";
import {BsFillEnvelopeFill, BsInstagram, BsLinkedin, BsMailbox, BsTwitter} from "react-icons/bs"
export default function Footer(){
    return(
        <div className="">
        <div className="grid grid-cols-1 h-[100%] px-64 py-2 bg-background-dark divide-y-2 divide-secondary">
            <div className="grid grid-cols-2 py-4">
                <div className="text-primary py-2">
                    <h1 className="text-4xl font-bold text-primary py-4"><Link to="/">{"{%Mridul%}"}</Link></h1>
                    <ul className="flex gap-3 text-2xl">
                        {/* Twitter */}
                        <BsTwitter />
                        {/* Instagram */}
                        <BsInstagram/>
                        {/* LinkedIn */}
                        <BsLinkedin/>
                    </ul>
                    <h4 className="text-lg">Contact Me</h4>
                    <h4 className="text-lg font-medium">Email:mridultiwari2002@gmail.com</h4>

                </div>
                <div className="grid grid-cols-1 py-4 place-items-end">
                    <h2 className="text-secondary text-2xl">Wanna work with me?</h2>
                    <button href="#" className="bg-sec-sec-grad px-4 py-2 rounded-md text-lg flex place-items-center gap-2 font-semibold">Connect me on LinkedIn <BsLinkedin className="text-2xl"/></button>
                    <button href="#" className="bg-sec-sec-grad px-4 py-2 rounded-md text-lg flex place-items-center gap-2 font-semibold">Send me an Email <BsFillEnvelopeFill className="text-2xl"/></button>
                </div>
            </div>
            <div className="grid place-items-center text-primary py-2">
                
                <h5 className="text-white text-lg tracking-widest ">Made with {"<3"} by Mridul Tiwari</h5>
            </div>
            
        </div>
        </div>
        
    )
}