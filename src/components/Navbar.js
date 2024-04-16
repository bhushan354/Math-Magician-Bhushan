import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/navbar.css'; // Make sure your CSS is properly linked

function Navbar() {
  return (
    <header>
      <h1>Math Magician</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          Home
        </NavLink>
        <NavLink
          to="/calculator"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          Calculator
        </NavLink>
        <NavLink
          to="/quotes"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          Quote
        </NavLink>
      </nav>
    </header>
  );
}
export default Navbar;
