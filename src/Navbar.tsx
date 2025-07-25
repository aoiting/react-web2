import React, { useState, useEffect, useRef } from 'react';
import Home from './Home';
import Design from './Design/Design';
import Projects from './Projects/Projects';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';




const Navbar: React.FC = () => {
  const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

 const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNav = (path: string) => {
    navigate(path);
    setMenuOpen(false); // close menu after click
  };

   useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&  // make sure ref exists
        !navRef.current.contains(event.target as Node) // click outside nav
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);


  return (
    <nav className="navbar" ref={navRef}>
 <button 
 className="hamburger" 
 onClick={toggleMenu} 
 aria-label="Toggle menu"
   aria-expanded={menuOpen}
  aria-controls="navbar-menu">
        {/* Hamburger icon: 3 bars */}
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    
            <ul id="navbar-menu" className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
        <li><button onClick={() => handleNav("/")}>Home</button></li>
        <li><button onClick={() => handleNav("/about")}>About</button></li>
        <li><button onClick={() => handleNav("/design")}>Design</button></li>
        <li><button onClick={() => handleNav("/video")}>Video</button></li>
        <li><button onClick={() => handleNav("/projects")}>Projects</button></li>
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