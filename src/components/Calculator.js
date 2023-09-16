import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [dataOld, dataNew] = useState({
    sum: null,
    action: null,
    newNum: null,
  });
  const handleClick = (symbol) => {
    let operand = symbol;
    if (symbol === '/') {
      operand = '÷';
    }

    const calculatedNum = calculate(dataOld, operand);
    dataNew(calculatedNum);
  };
  const displayValue = dataOld.newNum || dataOld.sum || '0';

  return (
    <div className="calciGrid">
      <div className="output">{displayValue}</div>
      <button type="button" onClick={() => handleClick('AC')}>AC</button>
      <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
      <button type="button" onClick={() => handleClick('%')}>%</button>
      <button type="button" className="orngBtn" onClick={() => handleClick('/')}>÷</button>
      <button type="button" onClick={() => handleClick('7')}>7</button>
      <button type="button" onClick={() => handleClick('8')}>8</button>
      <button type="button" onClick={() => handleClick('9')}>9</button>
      <button type="button" className="orngBtn" onClick={() => handleClick('x')}>*</button>
      <button type="button" onClick={() => handleClick('4')}>4</button>
      <button type="button" onClick={() => handleClick('5')}>5</button>
      <button type="button" onClick={() => handleClick('6')}>6</button>
      <button type="button" className="orngBtn" onClick={() => handleClick('-')}>-</button>
      <button type="button" onClick={() => handleClick('1')}>1</button>
      <button type="button" onClick={() => handleClick('2')}>2</button>
      <button type="button" onClick={() => handleClick('3')}>3</button>
      <button type="button" className="orngBtn" onClick={() => handleClick('+')}>+</button>
      <button type="button" className="span-two" onClick={() => handleClick('0')}>0</button>
      <button type="button" onClick={() => handleClick('.')}>.</button>
      <button type="button" className="orngBtn" onClick={() => handleClick('=')}>=</button>

    </div>
  );
}

export default Calculator;
