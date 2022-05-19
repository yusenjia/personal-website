import React from "react";
import "./Hero.css"


export default function Hero(){
    
    return(
        <div className="hero" id="Intro">
            <div className="hero-content">
                <h1 className="intro">Hello, I'm Yusen. </h1>
                
                <p className="roll">I'm a <span>Front-end Developer</span> with a passion for create responsive & functional websites.                
                </p>
    <button className="primary-btn roll-in">            <a href="https://yusenjia.github.io/quiz-app" target="_blank">Resume</a></button>
            </div>
        </div>
    )
}