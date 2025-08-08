import React from 'react';
import './Home.css';
import Header from './components/header.tsx'

const Home: React.FC = () => {
    return (
    <div>
     <Header />

    <div className="container-home">



  <div className="home-content">
    <h3>This is the Home Page</h3>
    </div>


  </div>

  </div>
    )
};

export default Home;