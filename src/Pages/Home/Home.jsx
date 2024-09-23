import React, { useRef } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaPython, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiPlugsConnectedFill } from "react-icons/pi";
import PP from "../../assets/profile-pic.png"
import PPimg from "../../assets/Designer.webp"
import projectDP from "../../assets/project-dp.jpg"
import { projectList } from '../../assets/lists';
import Cards from '../../Components/Cards';
import wallPeek from "../../assets/wall_peekk.gif"
import { color, motion, useScroll, useTransform } from 'framer-motion';
import { CarouselCustomNavigation } from '../../Components/Corousel';


function Home() {
    const ref = useRef(null);
    const bottomRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const fadeInAnimation = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0
        }
    }

    const scrollToBottom = () => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
    return (
        <div>
            <div className='w-full h-[100vh] bg-neutral-800 text-white grid place-items-center'>
                <div ref={ref} className='px-4 md:px-8 lg:px-16'>
                    <div className='text-center select-none'>
                        <motion.h4
                            style={{ y: textY }}
                            className='text-base md:text-xl font-extralight italic'
                        >
                            👋, My name is Mridul Tiwari and I am a
                        </motion.h4>
                        <motion.h1
                            style={{ y: textY }}
                            className='text-4xl md:text-6xl lg:text-9xl font-sans font-bold'
                        >
                            FULL STACK
                        </motion.h1>
                        <motion.h1
                            style={{ y: textY }}
                            className='text-4xl md:text-6xl lg:text-9xl font-sans font-bold'
                        >
                            WEB DEVELOPER
                        </motion.h1>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center md:justify-between mt-8'>
                        <motion.p
                            style={{ y: textY }}
                            className='text-base md:text-xl font-extralight italic text-center'
                        >
                            based in Delhi, India
                        </motion.p>
                        <div className='text-center mt-4 md:mt-0'>
                            <motion.div
                                className='text-neutral-300 text-xl md:text-2xl italic flex justify-center md:justify-evenly gap-4'
                            >
                                <a
                                    target='_blank'
                                    href='https://www.linkedin.com/in/mridulti'
                                    rel='noopener noreferrer'
                                >
                                    <FaLinkedinIn className='cursor-pointer hover:text-cyan-600' />
                                </a>
                                <a
                                    target='_blank'
                                    href='https://www.github.com/MridulTi'
                                    rel='noopener noreferrer'
                                >
                                    <FaGithub className='cursor-pointer hover:text-cyan-600' />
                                </a>
                                <a
                                    target='_blank'
                                    href='https://x.com/Mridulti'
                                    rel='noopener noreferrer'
                                >
                                    <FaXTwitter className='cursor-pointer hover:text-cyan-600' />
                                </a>
                                <a
                                    target='_blank'
                                    href='https://www.instagram.com/mridulti'
                                    rel='noopener noreferrer'
                                >
                                    <FaInstagram className='cursor-pointer hover:text-cyan-600' />
                                </a>
                            </motion.div>
                            <a href='https://drive.google.com/file/d/18GgfDl2F-OZbbev_2GC1sjsuBeAUGTo4/view?usp=sharing' target='_blank'><motion.p style={{y:textY}} className='flex gap-4 place-items-center text-red-500 text-2xl cursor-pointer hover:text-cyan-500 italic'>Resume!</motion.p></a>
                        </div>
                    </div>
                </div>

                <motion.img variants={fadeInAnimation} initial="initial" whileInView="animate" viewport={{ once: true }} style={{ y: backgroundY }} className='w-[28vw] z-1 absolute top-96 lg:top-72' src={PPimg} />
                <div className='flex gap-12 place-items-center z-10'>
                    <a target='_blank' href="https://github.com/MridulTi"><button className='p-3 bg-neutral-900 border border-white flex gap-2 hover:bg-white hover:text-black'>Visit My Github <FaGithub className='text-2xl' /></button></a>
                    <button onClick={scrollToBottom} className='p-3 bg-neutral-900 border border-white flex gap-2 hover:bg-white hover:text-black'>Connect with me <PiPlugsConnectedFill className='text-2xl' /></button>
                </div>
            </div>
            <div className='divide divide-y-2 divide-neutral-300 select-none'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 place-items-center px-4 md:px-12 lg:px-52 text-black bg-neutral-200 py-12'>
                    <img loading='lazy' className='w-52 md:w-72 lg:w-96 object-contain' src={PP} alt='Profile' />
                    <div className='text-center md:text-right w-full md:w-8/12 p-4 '>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif'>Hello.</h1>
                        <p className='text-base  text-justify'>
                            I'm Mridul Tiwari, a passionate tech enthusiast with a strong foundation in programming and problem-solving. My journey in technology has been fueled by curiosity, leading me to actively participate in hackathons and contribute to open-source projects.
                            These experiences have not only sharpened my technical skills but also deepened my appreciation for teamwork.
                            <br /><br />I’m particularly interested in AI, machine learning, and cloud computing, and I’m eager to work on projects that push boundaries and create meaningful impact. I believe in the power of collaboration and am excited about the opportunity to innovate alongside others who share my vision.
                            <br /><br />Thank you for taking the time to learn about me. I look forward to exploring new possibilities together.
                        </p>
                    </div>
                </div>

                <div className='w-full h-[86vh] py-12 grid place-items-center px-4 md:px-8 lg:px-64 text-black bg-neutral-900 text-white'>
                    <h1 className='text-3xl md:text-4xl font-mono font-semibold'>Skills</h1>
                    <div className='grid gap-4 place-items-center'>
                        <h1 className='text-xl md:text-2xl'>Programming Languages</h1>
                        <div className='grid grid-flow-col gap-4 justify-center flex-wrap'>
                            <img loading='lazy' src="https://skillicons.dev/icons?i=c" alt='C' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=python" alt='Python' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=javascript" alt='JavaScript' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=go" alt='Go' />
                        </div>
                    </div>
                    <div className='grid gap-4 place-items-center'>
                        <h1 className='text-xl md:text-2xl'>Web Development</h1>
                        <div className='grid grid-flow-col gap-4 justify-center flex-wrap'>
                            <img loading='lazy' src="https://skillicons.dev/icons?i=django" alt='Django' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=flask" alt='Flask' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=html" alt='HTML' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=css" alt='CSS' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=bootstrap" alt='Bootstrap' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=jquery" alt='jQuery' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=tailwindcss" alt='TailwindCSS' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=react" alt='React' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=vite" alt='Vite' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=nodejs" alt='Node.js' />
                            <img loading='lazy' src="https://skillicons.dev/icons?i=express" alt='Express' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 w-full'>
                        <div className='grid gap-4 place-items-center w-full'>
                            <h1 className='text-xl md:text-2xl'>App Development</h1>
                            <div className='flex justify-center gap-4 flex-wrap'>
                                <img loading='lazy' src="https://skillicons.dev/icons?i=react&theme=light" alt='React' />
                                {/* <img src="https://skillicons.dev/icons?i=flutter" alt='Flutter'/> */}
                            </div>
                        </div>
                        <div className='grid gap-4 place-items-center w-full'>
                            <h1 className='text-xl md:text-2xl'>Databases</h1>
                            <div className='flex justify-center gap-4 flex-wrap'>
                                <img loading='lazy' src="https://skillicons.dev/icons?i=mongodb" alt='MongoDB' />
                                <img loading='lazy' src="https://skillicons.dev/icons?i=mysql" alt='MySQL' />
                                <img loading='lazy' src="https://skillicons.dev/icons?i=sqlite" alt='SQLite' />
                            </div>
                        </div>
                    </div>
                    <div className='grid gap-4 place-items-center'>
                        <h1 className='text-xl md:text-2xl'>Tools</h1>
                        <div className='grid grid-flow-col gap-4 justify-center flex-wrap'>
                            <img loading="lazy" src="https://skillicons.dev/icons?i=git" alt='Git' />
                            <img loading="lazy" src="https://skillicons.dev/icons?i=github" alt='GitHub' />
                            <img loading="lazy" src="https://skillicons.dev/icons?i=vscode" alt='VSCode' />
                            <img loading="lazy" src="https://skillicons.dev/icons?i=postman" alt='Postman' />
                            <img loading="lazy" src="https://skillicons.dev/icons?i=pytorch" alt='PyTorch' />
                            <img loading="lazy" src="https://skillicons.dev/icons?i=tensorflow" alt='TensorFlow' />
                            <img loading="lazy" src="https://skillicons.dev/icons?i=npm" alt='NPM' />
                            <img loading="lazy" src="https://skillicons.dev/icons?i=webflow" alt='Webflow' />
                            <img loading="lazy" src="https://skillicons.dev/icons?i=photoshop" alt='Photoshop' />
                        </div>
                    </div>
                </div>

                <div className='bg-neutral-800 px-4 md:px-12 lg:px-64 py-16 text-white'>
                    <h1 className='font-serif text-4xl md:text-5xl lg:text-6xl'>Projects.</h1>
                    <div className='grid place-items-center gap-6 p-2'>
                        {
                            projectList.reverse().map(data => (
                                <Cards
                                    {...data}
                                    key={data.id}
                                />
                            ))
                        }
                    </div>
                </div>
                <div ref={bottomRef} className='bg-neutral-200 py-12 md:py-20 text-black px-4 md:px-12 lg:px-24 xl:px-64 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24'>
                    <div className='flex flex-col items-center'>
                        <img src={wallPeek} loading="lazy" className='w-full md:w-11/12 lg:w-9/12 xl:w-8/12 object-cover' alt='Thank You' />
                        <h1 className='font-serif text-4xl md:text-5xl lg:text-6xl text-center'>Thank You.</h1>
                        <h1 className='text-xl md:text-2xl pt-4 text-center'>Get in Touch:</h1>
                        <a target='_blank' href='mailto:mridultiwari2002@gmail.com' rel='noopener noreferrer'>
                            <h1 className='text-base md:text-lg font-light italic text-center'><b>Email:</b> mridultiwari2002@gmail.com</h1>
                        </a>
                    </div>
                    <div className='flex flex-col items-center md:items-start'>
                        <p className='text-neutral-400 w-full md:w-11/12 lg:w-10/12 xl:w-9/12 -rotate-0 md:-rotate-6 select-none text-justify'>
                            Thank you for visiting! Your time and interest mean a lot to me, and I'm truly grateful for the opportunity to share my work and passions with you. I hope our paths cross again in the future, and we can continue to explore new ideas and possibilities together.
                            <br /><br />
                            Please feel free to reach out if you have any thoughts, questions, or just want to connect. Your support is sincerely appreciated, and I look forward to staying in touch.
                            <br /><br />
                            ~ Mridul Tiwari
                        </p>
                    </div>
                </div>

                <footer className='text-center italic font-extralight text-xs md:text-sm lg:text-base text-neutral-500 py-2 md:py-3 bg-neutral-200'>
                    Copyright © mridulti.netlify.app | All Rights Reserved | 2024
                </footer>

            </div>
        </div>
    )
}

export default Home