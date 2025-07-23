import React from 'react';
import Home from './Home';
import Design from './Design/Design';
import Projects from './Projects/Projects';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';




const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={() => navigate("/")}>Home</button></li>
        <li><button onClick={() => navigate("/about")}>About</button></li>
        <li><button onClick={() => navigate("/design")}>Design</button></li>
        <li><button onClick={() => navigate("/video")}>Video</button></li>
        <li><button onClick={() => navigate("/projects")}>Projects</button></li>
      </ul>
    </nav>
  );
};


export default Navbar;


/*
const Navbar: React.FC = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <button onClick={()=>navigate("Home")}><a href="">Home</a></button>
        <li><a href="">About</a></li>
        <button onClick={()=>navigate("Design")}><a href="">Design</a></button>
        <button onClick={()=>navigate("Video")}><a href="">Video</a></button>
       <button onClick={()=>navigate("Projects")}><a href="">Projects</a></button>
      </ul>
    </nav>
  );
};
*/