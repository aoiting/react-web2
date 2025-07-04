import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Design from './Design';
import Video from './Video';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;