
import './App.css';
import Contact from './Component/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
import Project from './Component/Projects/Project';
import Skill from './Component/Skills/Skill';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      {/* <Project />
      <Skill />
      <Contact /> */}
  
    </div>
    </Router>
  );
}

export default App;
