import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Design from './Design/Design';
import Video from './Video/Video';
import Projects from './Projects/Projects';
import About from './About/About';
import Header from './components/header.tsx'

const App: React.FC = () => {
  return (
    <Router>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/video" element={<Video />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

    </Router>
  );
};

export default App;