import React from "react";
import "../Links/Links.css"
import github from "../../assets/github-brands.svg"
import linkedin from "../../assets/linkedin-brands.svg"

export default function Links(){
    return(
        <div className="links-container">
            <h1>Email:yusenjsx@gmail.com</h1>
            <div className="social-links">
                <a href="https://yusenjia.github.io/quiz-app" target="_blank"><button className="primary-btnm">Resume</button></a>
                <a href="https://github.com/yusenjia" target="_blank"><img src={github} alt="" /></a>
                <a href="https://github.com/yusenjia" target="_blank"><img src={linkedin} alt="" /></a>
            </div>
        </div>
    )
}