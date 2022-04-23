import React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import mobileNav from "../../assets/list.svg"
import closeMenu from "../../assets/icon-close.svg"


export default function Navbar(){

    const [showMobileNav,setShowMobileNav] = React.useState(false)

    const links=[
        {
            "name":"Intro",
            "to":  "/",
            "id" : 0,
        },
        {
           "name": "Projects",
           "to": "/projects",
           "id": 1, 
        },
        {
            "name": "Skills",
            "to": "/skills",
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
                        {links.map((link,value)=>{
                            return(
                                <NavLink to={link.to}><li onClick={()=>setShowMobileNav(false)}>{link.name}</li></NavLink>
                            )
                        })}
                    </ul>
                </div>

                {/* mobile nav */}

                {showMobileNav &&
                    <div className={`mobile-navbar`}>
                        <ul className="flex">
                            {links.map((link,value)=>{
                                return(
                                    <NavLink to={link.to} ><li onClick={()=>setShowMobileNav(false)}>{link.name}</li></NavLink>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>

        </div>
    )
}