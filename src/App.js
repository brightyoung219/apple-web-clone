import Nav from './components/Navbar/Nav';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';



function App() {
  return (
    <>
      <Nav />
      <LandingPage />
      
      <Routes>
        <Route path='/' element={ <LandingPage /> }/>
      </Routes>
    </>
  );
}

export default App;
