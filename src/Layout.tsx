import React from 'react';
import './Layout.css';
import Header from './components/header.tsx'
import Home from './Home.tsx';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container">

      <Home />
      {children}

    </div>

    
  );
};

export default Layout;


/*

 <div className="column col1">
        <h1>Ting Wong Portfolio</h1>
      </div>
      <div className="column col2">
        {children}
      </div>
      <div className="column col3">
        <Navbar />
      </div>


      */