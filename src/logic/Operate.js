import Big from 'big.js';

export default function Operate(prevNum, nextNum, operatorValue) {
  const firstNum = Big(prevNum);
  const secondNum = Big(nextNum);

  switch (operatorValue) {
    case '+':
      return firstNum.plus(secondNum).toString();

    case '-':
      return firstNum.minus(secondNum).toString();

    case 'x':
      return firstNum.times(secondNum).toString();

    case '÷':
      try {
        return firstNum.div(secondNum).toString();
      } catch (err) {
        return "Can't divide by 0.";
      }

    case '%':
      try {
        return firstNum.mod(secondNum).toString();
      } catch (err) {
        return "Can't find modulo as can't divide by 0.";
      }

    default:
      throw Error(`Unknown operatorValue '${operatorValue}'`);
  }
}
