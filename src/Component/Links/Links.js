import React from "react";
import "../Links/Links.css"
import github from "../../assets/github-brands.svg"
import linkedin from "../../assets/linkedin-brands.svg"

export default function Links(){
    return(
        <div className="links-container">
            <h1 className="email">Email:yusenjsx@gmail.com</h1>
            <div className="social-links">
                <button className="primary-btnm" onClick={()=>window.open("/personal-website/resume.pdf", "_blank")}>Resume</button>
                <a href="https://github.com/yusenjia" target="_blank"><img src={github} alt="" /></a>
                <a href="https://www.linkedin.com/in/yusen-jiang-621602242/" target="_blank"><img src={linkedin} alt="" /></a>
            </div>
        </div>
    )
}