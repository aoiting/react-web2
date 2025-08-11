import React from "react";
import "./Home.css";
import Header from "../components/header.tsx";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleNav = (path: string) => {
        navigate(path);
    };

  return (
    <div>
      <Header />

      <div className="container-home">
        <div className="home-content">
          <h3>This is the Home Page</h3>
        </div>
        <div className="knowmorebtn">
    
          <button onClick={() => handleNav("/about")}>Know More</button>
        </div>

      </div>
    </div>
  );
};

export default Home;
