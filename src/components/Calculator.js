import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';

export default function Calculator() {
  return (
    <div className="calciGrid">
      <CalculatorDisplay />
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="orngBtn">÷</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="orngBtn">*</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="orngBtn">-</button>
      <button type="button">3</button>
      <button type="button">2</button>
      <button type="button">1</button>
      <button type="button" className="orngBtn">+</button>
      <button type="button" className="span-two">0</button>
      <button type="button">.</button>
      <button type="button" className="orngBtn">=</button>

    </div>
  );
}
