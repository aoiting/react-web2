import React from 'react';
import Navbar from './Navbar';
import './Layout.css';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <div className="column col1">
        <h1>Ting Wong Portfolio</h1>
      </div>
      <div className="column col2">
        {children}
      </div>
      <div className="column col3">
        <Navbar />
      </div>
    </div>

    
  );
};

export default Layout;