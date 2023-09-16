import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import CalculatorDisplay from './CalculatorDisplay';

function Calculator() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (symbol) => {
    const operand = symbol === '/' ? '÷' : symbol;
    const calculatedNum = calculate(data, operand);
    setData(calculatedNum);
  };

  const calciToDisplay = data.next || data.total || '0';

  const renderButton = (symbol, className = '') => (
    <button
      type="button"
      className={className}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </button>
  );

  return (
    <div className="calciGrid">
      <CalculatorDisplay calciToDisplay={calciToDisplay} />
      {renderButton('AC')}
      {renderButton('+/-')}
      {renderButton('%')}
      {renderButton('/', 'orngBtn')}
      {renderButton('7')}
      {renderButton('8')}
      {renderButton('9')}
      {renderButton('*', 'orngBtn')}
      {renderButton('4')}
      {renderButton('5')}
      {renderButton('6')}
      {renderButton('-', 'orngBtn')}
      {renderButton('1')}
      {renderButton('2')}
      {renderButton('3')}
      {renderButton('+', 'orngBtn')}
      {renderButton('0', 'span-two')}
      {renderButton('.')}
      {renderButton('=', 'orngBtn')}
    </div>
  );
}

export default Calculator;
