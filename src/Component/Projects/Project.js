import React from "react"
import "./Project.css"

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
        <div className="project-container">
            <div className="project-list">
                <h1>Projects</h1>
            </div>
            <button>Live Demo</button>
            <button>Source Code</button>
        </div>
    )
}