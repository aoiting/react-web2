import React from 'react';
import Home from './Home';
import Design from './Design';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <button onClick={()=>navigate("Home")}><a href="">Home</a></button>
        <li><a href="">About</a></li>
        <button onClick={()=>navigate("Design")}><a href="">Design</a></button>
        <li><a href="">Video</a></li>
        <li><a href="">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;