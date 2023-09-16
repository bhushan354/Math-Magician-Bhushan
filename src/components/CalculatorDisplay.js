import React from 'react';
import PropTypes from 'prop-types';

function CalculatorDisplay({ input, output }) {
  return (
    <div className="output">
      <div className="prev-Num">{output}</div>

      <div className="curr-Num">{input}</div>

    </div>
  );
}

CalculatorDisplay.propTypes = {
  input: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
};

export default CalculatorDisplay;
