import React, { useState } from 'react';
import Operate from '../logic/Operate';
import CalculatorDisplay from './CalculatorDisplay';

export default function Calculator() {
  const [input, setInput] = useState('0');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState('');

  const HandleButtonClick = (value) => {
    let result = input;
    let prevInput = previousInput;
    let op = operator;

    if (value === 'AC') {
      result = '0';
      prevInput = '';
      op = '';
    } else if (value === '+/-') {
      result = result === '0' ? '0' : (parseFloat(result) * -1).toString();
    } else if (value === '%') {
      result = (parseFloat(result) / 100).toString();
    } else if (value === '=') {
      if (prevInput !== '') {
        if (operator === '+' || operator === '-' || operator === '*' || operator === '÷') {
          const calculatedOutput = Operate(prevInput, input, operator);
          setInput(calculatedOutput);
          setPreviousInput(`${prevInput} ${operator} ${input}`);
          setOperator('=');
        }
      }
    } else {
      if (result === '0' || op === '=') {
        result = value;
      } else {
        result += value;
      }

      if (['+', '-', '*', '÷'].includes(value) && prevInput !== '') {
        if (op === '+' || op === '-' || op === '*' || op === '÷') {
          result = Operate(prevInput, result, op);
          prevInput = result;
          op = value;
        }
      } else if (prevInput === '') {
        prevInput = result;
        op = value;
      }
    }

    setInput(result);
    setPreviousInput(prevInput);
    setOperator(op);
  };

  return (
    <div className="calciGrid">
      <CalculatorDisplay input={input} output={previousInput} />
      <button type="button" onClick={() => HandleButtonClick('AC')}>AC</button>
      <button type="button" onClick={() => HandleButtonClick('+/-')}>+/-</button>
      <button type="button" onClick={() => HandleButtonClick('%')}>%</button>
      <button type="button" className="orngBtn" onClick={() => HandleButtonClick('÷')}>÷</button>
      <button type="button" onClick={() => HandleButtonClick('7')}>7</button>
      <button type="button" onClick={() => HandleButtonClick('8')}>8</button>
      <button type="button" onClick={() => HandleButtonClick('9')}>9</button>
      <button type="button" className="orngBtn" onClick={() => HandleButtonClick('*')}>*</button>
      <button type="button" onClick={() => HandleButtonClick('4')}>4</button>
      <button type="button" onClick={() => HandleButtonClick('5')}>5</button>
      <button type="button" onClick={() => HandleButtonClick('6')}>6</button>
      <button type="button" className="orngBtn" onClick={() => HandleButtonClick('-')}>-</button>
      <button type="button" onClick={() => HandleButtonClick('3')}>3</button>
      <button type="button" onClick={() => HandleButtonClick('2')}>2</button>
      <button type="button" onClick={() => HandleButtonClick('1')}>1</button>
      <button type="button" className="orngBtn" onClick={() => HandleButtonClick('+')}>+</button>
      <button type="button" className="span-two" onClick={() => HandleButtonClick('0')}>0</button>
      <button type="button" onClick={() => HandleButtonClick('.')}>.</button>
      <button type="button" className="orngBtn" onClick={() => HandleButtonClick('=')}>=</button>
    </div>
  );
}
