import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RiverDay from './pages/RiverDay'; // ✅ Import your route
import Home from './components/Hero';
import Camping from './pages/Camping';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/riverday" element={<RiverDay />} /> {/* ✅ Route for River Day */}
        <Route path="/camping" element={<Camping />} /> {/* ✅ Route for Camping Packages */}
      </Routes>
    </>
  );
}

export default App;