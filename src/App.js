import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage';
import Layout from './components/Layout';
import Calculator from './components/Calculator';
import FetchQuote from './api/fetchQuote';
import './stylesheet/App.css';
import './stylesheet/quote.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quotes" element={<FetchQuote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
