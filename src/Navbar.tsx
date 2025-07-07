import React from 'react';
import Home from './Home';
import Design from './Design';
import Projects from './Projects';
import { useNavigate } from 'react-router-dom';

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

export default Navbar;