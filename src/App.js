import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RiverDay from './pages/RiverDay';
import Home from './components/Hero';
import Camping from './pages/Camping';

function App() {
  return (
    <div style={{
      backgroundImage: "url('/camping-under-the-sky.webp')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh"
    }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/riverday" element={<RiverDay />} />
        <Route path="/camping" element={<Camping />} />
      </Routes>
    </div>
  );
}

export default App;