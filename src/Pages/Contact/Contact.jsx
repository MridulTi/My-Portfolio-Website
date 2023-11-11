import React from "react";
import { motion } from "framer-motion";
import Peek from "../../assets/avatar/peek.png"
export default function Contact(){
    window.scroll(0,0)
    const [Name,setName]=React.useState("")
    const [Subject,setSub]=React.useState("")
    const [Mssg,setMssg]=React.useState("")
    return(
        <div className="pt-24 pb-10">
            <div className="grid place-items-center">
            <div className=" p-10 rounded-3xl w-1/2 bg-gray-50 drop-shadow-xl">
                <h1 className="text-center font-bold text-3xl">Let's Get in Touch!</h1>
                <p className="text-md py-4">We're delighted to connect with you. Whether you have a question, feedback, or a collaboration idea, we're here to listen. Feel free to reach out through any of the provided methods below, and we'll make sure to respond promptly.</p>
                <div className="py-4 grid gap-2 text-lg">
                    <a href="mailto:mridultiwari2002@gmail.com"><h1 className="underline underline-offset-4"><b className="">Email:</b>mridultiwari2002@gmail.com</h1></a>
                    <a href="https://twitter.com/Mridulti"><h1  className="underline underline-offset-4"><b>Twitter:</b>@Mridulti</h1></a>
                    <a href="https://www.instagram.com/mridulti/"><h1 className="underline underline-offset-4"><b>Instagram:</b>@MridulTi</h1></a>
                    <a href="https://www.linkedin.com/in/mridul-tiwari-001185216/"><h1 className="underline underline-offset-4"><b>LinkedIn:</b>linkedin.com/mridultiwari</h1></a>
                </div>
                <div className="py-4">
                    <h1 className="text-xl font-semibold">Have a Question or Feedback?</h1>
                    <p>Use the form below to drop us a message. We appreciate your thoughts and are always looking to improve.</p>
                    <form action={(e)=>e.preventDefault()} className="grid gap-4 w-2/3 py-4">
                        <input placeholder="Enter Name" className="p-4 border outline-0" value={Name} onChange={(e)=>setName(e.target.value)}></input>
                        <input placeholder="Enter Subject" className="p-4 border outline-0" value={Subject} onChange={(e)=>setSub(e.target.value)}></input>
                        <input placeholder="Enter Message" className="p-4 border outline-0 " value={Mssg}onChange={(e)=>setMssg(e.target.value)}></input>
                    </form>
                    <a href={`mailto:mridultiwari2002@gmail.com?subject=${Subject}&body=${"I am "+Name+", \n"+Mssg}`}><motion.button className="px-10 py-3 my-4 text-[#2B2A4C] bg-sec-sec-grad text-xl tracking-widest "
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 0.95 }}
                        >Mail Me!</motion.button></a>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">Your Feedback Matters:</h1>
                    <p>We value your feedback and suggestions. Let us know how we can better serve you. Thank you for considering us as your point of contact. We look forward to connecting with you!</p>
                    
                </div>
                <div className="text-lg py-4">
                    <h1>Warm Regards,</h1>
                    <h1>Mridul Tiwari</h1>
                </div>
                <div className="grid place-items-center">
                    <img src={Peek} alt="peek" className="w-2/3" />

                </div>
            </div>
            </div>
            
        </div>
    )
}