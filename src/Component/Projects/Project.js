import React from "react"
import "./Project.css"
import quiz from "../../assets/quiz-app.png"

export default function Project(){
    const projects =[
        {
            name:"Quiz-app",
            demo:"https://yusenjia.github.io/quiz-app",
            view:"",
            description:"A fully responsive quiz application testing your knowledge on more than 20 categories.",
            code:"https://github.com/yusenjia/quiz-app",
            // html css sass react Js APi Mui Axios React Router
        },

        {
            name:"Chomper Shopper",
            demo:"https://yusenjia.github.io/fastfood-ecommerce-website",
            view:"",
            description:"A responsive mutipage ecommerce application.",
            code:"https://github.com/yusenjia/fastfood-ecommerce-website",
            //html css sass react js react router
        }
    ]
    return(
        <div className="project-container" id="Projects">
            <div className="project-list">
                <h1 className="title">Projects</h1>
                
                <div className="project">
                    <div className="project-info">
                        <h3 className="project-title">Quiz APP</h3>
                        <img src={quiz} alt="app screenshot" />
                        <p className="project-description">A fully responsive quiz application testing your knowledge on variety of topics.</p>
                        

                        <p className="sk">Tech Used  </p>
                        <div className="tech-list">
                            <p className="tech">React Js</p>
                            <p className="tech">Scss</p>
                            <p className="tech">React Router</p>
                            <p className="tech">Metrial UI</p>
                            <p className="tech">TRIVIA API</p>
                        </div>
                    </div>

                    <div className="btns">
                         <a href="https://yusenjia.github.io/quiz-app" target="_blank"><button className="primary-btn">Live Demo</button></a>
                         <a href="https://github.com/yusenjia/quiz-app" target="_blank"><button className="primary-btn">Source Code</button></a>  
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h3 className="project-title">Quiz APP</h3>
                        <img src={quiz} alt="app screenshot" />
                        <p className="project-description">A fully responsive quiz application testing your knowledge on variety of topics.</p>
                        

                        <p className="sk">Tech Used  </p>
                        <div className="tech-list">
                            <p className="tech">React Js</p>
                            <p className="tech">Scss</p>
                            <p className="tech">React Router</p>
                            <p className="tech">Metrial UI</p>
                            <p className="tech">TRIVIA API</p>
                        </div>
                    </div>

                    <div className="btns">
                         <a href="https://yusenjia.github.io/quiz-app" target="_blank"><button className="primary-btn">Live Demo</button></a>
                         <a href="https://github.com/yusenjia/quiz-app" target="_blank"><button className="primary-btn">Source Code</button></a>  
                    </div>
                </div>
            </div>
        </div>
    )
}