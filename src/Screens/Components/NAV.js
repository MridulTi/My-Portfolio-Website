import React from "react"
import {Link} from "react-router-dom"
import "./styles/Navbar.css"
export default function Nav(){
    function scrolltoProject(){
        window.scrollTo(0,2320);
    }
    const [color,setcolor]=React.useState(false)
    const changecolor=()=>{
        if(window.scrollY>10 ||(window.screenY!=0 &&window.screenX!=0)){
            setcolor(true)
        }else{
            setcolor(false)
        }
    }
    function Logo(){
            return(
                <Link to="/" className="Logo-white"><h1>Mridul Tiwari</h1></Link>
            )
    }

    window.addEventListener('scroll', changecolor);
    return (
        <div className='NAVBAR'>
            {Logo()}
            <ul className="NAV">
                <li><Link to="/about" className="Link">About</Link></li>
                <li><Link to="/" className="Link">Blogs{/*PRojects*/ }</Link></li>
                <li><Link to="/contactus" className="Link">Contact Us</Link></li>
                <li className="Link" onClick={scrolltoProject}>Project</li>
                <li><a href="https://docs.google.com/document/d/1Gx8fUq4GJvW0pwqyqMjupwYgbrXcqUUIR3BzwfpOKFo/edit?usp=sharing" target="_blank" className="Link">Resume</a></li>
            </ul>
        </div>
    )
}
