import React from "react"
import {Link} from "react-router-dom"
import {BsTwitter,BsGithub} from "react-icons/bs"
import {GrLinkedinOption} from "react-icons/gr"
import {SiHashnode} from "react-icons/si"
export default function Foot(){
    return (
        <div className="foot-socials">
                <ul className="footImage">
                    <li><GrLinkedinOption/></li>
                    <li><BsTwitter/></li>
                    <li><BsGithub/></li>
                    <li><SiHashnode/></li>
                </ul>
        </div>
    )
}