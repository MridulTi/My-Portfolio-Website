import React from 'react'
import { FaTruckLoading } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BiSolidCctv } from "react-icons/bi";

function Cards(props) {
    const fadeInAnimation={
        initial:{
            opacity:0,
            y:100
        },
        animate:{
            opacity:1,
            y:0
        }
    }
    return (
        <Link to={props.link}  className='w-full'>
            <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate" viewport={{once:true}} className='hover:bg-neutral-600 w-full rounded-lg p-2 grid grid-flow-col justify-evenly items-center'>
                {props.img!="empty"? (props.img) :(<FaTruckLoading className='text-7xl w-full text-blue-500 bg-neutral-700 p-2 rounded-full'/>)}
                <div className='w-[40vw]'>
                    <h1 className='font-bold'>{props.title}</h1>
                    <h1 className='italic text-neutral-300'>{props.subtitle}</h1>
                    <h1 className='font-extralight text-neutral-400'>{props.description}</h1>
                    <img loading='lazy' className='w-32 py-2' src={`https://skillicons.dev/icons?i=${props.techstacks}&theme=dark`} />  

                </div>
            </motion.div>
        </Link>
    )
}

export default Cards