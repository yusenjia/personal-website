import React from "react"
import "./Navbar.css"
import mobileNav from "../../assets/list.svg"
import closeMenu from "../../assets/icon-close.svg"
import {NavHashLink} from "react-router-hash-link"
import { NavLink } from "react-router-dom"
import {Link} from 'react-scroll'




// aovid content being covered up by fixed navibar
const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -140; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export default function Navbar(){

    const [showMobileNav,setShowMobileNav] = React.useState(false)
    const [activeLink,setActiveLink] = React.useState(0)

    function checkActive(link,index){
        console.log(index)

    }

    const links=[
        {
            "name":"Intro",
            "to":  "/",
            "id" : 0,
        },
        {
           "name": "Projects",
           "to": "/Projects",
           "id": 1, 
        },
        {
            "name": "Skills",
            "to": "/Skills",
            "id": 2,
        }, 
        {
            "name": "Contact",
            "to": "/contact",
            "id": 3,
        }
    ]
    return(
        <div className="nav-container">
            <div className="nav-content flex">
                <h1 className="logo">Y <span>J</span></h1>
                <img src={showMobileNav? closeMenu : mobileNav} alt="mobile navigation" className="mobile-nav-toggle"
                onClick={()=>setShowMobileNav(prev=>!prev)}/>

                {/* desktop nav */}
                <div 
                className="desktop-navbar">
                    <ul className="flex">
                        {links.map((link,index)=>{
                            return(
                                // on site navigation
                                <Link  className="link" 
                                    activeClass="active-menu"
                                    to={link.name}
                                    hashSpy={true}
                                    spy={true} 
                                    smooth={true}
                                    offset={-150}
                                    duration={300}
                                ><li onClick={()=>setShowMobileNav(false)}>{link.name}</li></Link>
                            )
                        })}
                    </ul>
                </div>

                {/* mobile nav */}

                {showMobileNav &&
                    <div className={`mobile-navbar`}>
                        <ul className="flex">
                        {links.map((link,index)=>{
                            return(
                                // on site navigation
                                <Link  className="link" 
                                    activeClass="active-menu"
                                    to={link.name}
                                    hashSpy={true}
                                    spy={true} 
                                    smooth={true}
                                    offset={-150}
                                    duration={300}
                                ><li onClick={()=>setShowMobileNav(false)}>{link.name}</li></Link>
                            )
                        })}
                    </ul>
                    </div>
                }
            </div>

        </div>
    )
}