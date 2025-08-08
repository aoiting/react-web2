
import React, { useState, useEffect, useRef } from 'react';
import Home from '../Home.tsx';
import Design from '../Design/Design.tsx';
import Projects from '../Projects/Projects.tsx';
import { useNavigate } from 'react-router-dom';
import '../Navbar.css';
import './header.css';



const Header: React.FC = () => {
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


    <header className="header">
      <div className="logo">
        <h1>Ting Wong Portfolio</h1>
      </div>
      

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
    </header>
  );
};


export default Header;

