import React from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"
import "./styles/Navbar.css"
export default function Nav(){
    let location=useLocation();
    function Checkhome(){
        if(location.pathname=="/"){
            window.scrollTo(0,0);
        }
    }
    
    function isBlog(){
        if(location.pathname=="/"){
            return(
                <li>
                    <a onClick={scrolltoBlog}>Blogs</a>
                </li>
            )
        }else{
            return(
                <li>
                    <Link to="/community" className="Link">Community</Link>
                </li>
            )
        }
    }
    function scrolltoBlog(){
        window.scrollTo(0,950);
    }
    function scrolltoProject(){
        window.scrollTo(0,2320);
    }
    const [logo,setlogo]=React.useState(true)
    const [color,setcolor]=React.useState(false)
    const [home,sethome]=React.useState(false)
    const changecolor=()=>{
        if(window.scrollY>120 ||(window.screenY!=0 &&window.screenX)){
            setcolor(true)
            setlogo(false)
        }else{
            setcolor(false)
            setlogo(true)
        }
    }
    React.useEffect(()=>{
        if(location.pathname=="/"){
            sethome(true)
        }else{
            sethome(false)
        }
    },[home])
    window.addEventListener('scroll', changecolor);
    return (
        <div className={home? `nav-home ${color? 'Navbar Navbar-bg':'Navbar Navbar-middle'}`:`${color? 'Navbar Navbar-bg':'Navbar Navbar-middle'}`}>
            <Link to="/" className={logo?"Logo py-2":"Logo-white py-2"}><h1 onClick={Checkhome}>Mridul Tiwari</h1></Link>
            <ul className="Nav py-3">
                <li><Link to="/about" className="Link">About</Link></li>
                {isBlog()}
                <li><Link to="/contactus" className="Link">Contact Us</Link></li>
                <li className="Link" onClick={scrolltoProject}>Project</li>
                <li><a href="https://docs.google.com/document/d/1Gx8fUq4GJvW0pwqyqMjupwYgbrXcqUUIR3BzwfpOKFo/edit?usp=sharing" target="_blank" className="Link">Resume</a></li>
            </ul>
        </div>
    )
}
