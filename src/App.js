import './components/Calculator.css';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQuote from './components/DisplayQuote';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <div className="navContainer">
          <div>
            <li className="heading">
              Math Magician
            </li>
          </div>

          <div className="linksContainer">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/quote" element={<DisplayQuote />} />
          <Route path="/calculator" element={<Calculator />} />
          {/* <DisplayQuote />
        <Calculator /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
