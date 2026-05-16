import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Benefits from './pages/Benefits';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';

function App() {
  const [language, setLanguage] = useState('HI');

  return (
    <Router>
      <div className="min-h-screen bg-white w-full overflow-x-hidden flex flex-col">
        
        {/* Navigation Bar */}
        <Navbar language={language} setLanguage={setLanguage} />

        {/* Routes Wrapper */}
        <main className="w-full flex-grow overflow-x-hidden">
          <Routes>
            <Route index element={<Home language={language} />} />
            <Route path="/" element={<Home language={language} />} />
            <Route path="/products" element={<ProductPage language={language} />} />
            <Route path="/benefits" element={<Benefits language={language} />} />
            <Route path="/product/:productId" element={<ProductDetail language={language} />} />
            <Route path="*" element={<Home language={language} />} />
          </Routes>
        </main>

        <footer className="py-6 text-center border-t border-stone-100 bg-stone-50">
           <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">
             © 2026 GauTatva 
           </p>
        </footer>

      </div>
    </Router>
  );
}

export default App;