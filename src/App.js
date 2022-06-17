
import './App.css';
import Contact from './Component/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
import Project from './Component/Projects/Project';
import Skill from './Component/Skills/Skill';
import Hero from "./Component/Hero/Hero"
import Links from './Component/Links/Links';

import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router basename="personal-website">
    <div className="App">
      <div className="top">
        <Links />
        <Navbar />
      </div>
      <Hero />

       <Project />
      <Skill />
      <Contact /> 
    </div>
    </Router>
  );
}

export default App;
