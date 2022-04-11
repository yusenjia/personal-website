import React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom";


export default function Navbar(){

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
        <div className="nav-container ">
            {/* <h1 className="logo">J</h1> */}
            <div className="navbar">
                <ul className="flex">
                    {links.map((link,value)=>{
                        return(
                            <div className="link-item">
                                <NavLink to={link.to}><li>{link.name}</li></NavLink>
                            </div>
                        )
                    })}
                </ul>


            </div>
        </div>
    )
}