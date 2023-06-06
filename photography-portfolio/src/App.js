import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
// import MobileHeader from './components/MobileHeader,js';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <MobileHeader /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


export default App;
