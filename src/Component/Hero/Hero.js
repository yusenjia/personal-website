import React from "react";
import "./Hero.css"


export default function Hero(){
    
    return(
        <div className="hero" id="Intro">
            <div className="hero-content">
                <h1 className="intro">Hello, I'm Yusen. </h1>
                
                <p className="roll">I'm a <span>Front-end Developer</span> with passion on create responsive &#38; functional websites.                
                </p>
                <button className="primary-btn roll-in" onClick={()=>window.open("/personal-website/resume.pdf", "_blank")}>Resume</button>
            </div>
        </div>
    )
}