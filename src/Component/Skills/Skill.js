import React from "react"
import "../Skills/Skill.css"
import html from "../../assets/icons8-html.svg"
import css from "../../assets/icons8-css.svg"
import js from "../../assets/icon8-js.svg"
import scss from "../../assets/icons8-sass.svg"
import react from "../../assets/icons8-react.svg"
import mui from "../../assets/icons8-mui.svg"
import git from "../../assets/icons8-git.svg"


export default function Skill(){
    return(
        <div className="skills-container">
            <h1>Skills</h1>
            <ul className="skill-list">
                <li><img src={html} alt="html-icon" /></li>
                <li><img src={css} alt="css-icon" /></li>
                <li><img src={js} alt="js-icon" /></li>
                <li><img src={scss} alt="scss-icon" /></li>
                <li><img src={react} alt="react-icon" /></li>
                <li><img src={git} alt="git-icon" /></li>
                <li><img src={mui} alt="mui-icon" /></li>
            </ul>
        </div>
      
    )
}