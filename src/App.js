import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer';
import Iphone13 from './pages/Iphone13';
import { useEffect, useState } from 'react';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={ <LandingPage /> }/>
        <Route path='/iphone-13' element={ <Iphone13 /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
