import React from "react"
import {Link} from "react-router-dom"
import "./styles/Navbar.css"
export default function Nav(){
    const [color,setcolor]=React.useState(false)
    const changecolor=()=>{
        if(window.scrollY>120 ||(window.screenY!=0 &&window.screenX!=0)){
            setcolor(true)
        }else{
            setcolor(false)
        }
    }
    function Logo(){
            return(
                <Link to="/" className="Logo"><h1>Mridul Tiwari</h1></Link>
            )
    }

    window.addEventListener('scroll', changecolor);
    return (
        <div className='NAVBAR'>
            {Logo()}
            <ul className="NAV">
                <li><Link to="/about" className="Link">About</Link></li>
                <li><Link to="/community" className="Link">Community{/*PRojects*/ }</Link></li>
                <li><Link to="/contactus" className="Link">Contact_Us</Link></li>
                <li><Link to="/works" className="Link">Project</Link></li>
                <li><a href="https://docs.google.com/document/d/1Gx8fUq4GJvW0pwqyqMjupwYgbrXcqUUIR3BzwfpOKFo/edit?usp=sharing" target="_blank" className="Link">Resume</a></li>
            </ul>
        </div>
    )
}
