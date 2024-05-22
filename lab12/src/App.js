import { Route, Routes } from 'react-router-dom';
import Navigation from './layout/Nav';
import Products from './pages/products';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import FAQ from './pages/faq';
import About from './pages/about';
import Contacts from './pages/contacts';

function App() {
  return (
    <div>
      <Navigation />
        <Routes>
          <Route path="/products" element={<Products />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
    </div>
  );
}

export default App;
