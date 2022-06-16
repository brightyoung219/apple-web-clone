import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer';
import Iphone13 from './pages/Iphone13';
import ProductInfo from './pages/ProductInfo';
import Cart from './pages/Cart';
import MacBook from './pages/MacBook';
import Ipad from './pages/Ipad';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={ <LandingPage /> }/>
        <Route path='/iphone-13' element={ <Iphone13 /> } />
        <Route path='/buy-iphone' element={ <ProductInfo /> } />
        <Route path='/buy-macbook' element={ <MacBook /> } />
        <Route path='/buy-ipad' element={ <Ipad /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
