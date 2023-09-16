import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

export default function CalculatorDisplay({ calciToDisplay }) {
  return (

    <div className="output">{calciToDisplay}</div>

  );
}

CalculatorDisplay.propTypes = {
  calciToDisplay: PropTypes.string.isRequired,
};
