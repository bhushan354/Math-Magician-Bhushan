import Big from 'big.js';

export default function Operate(num1, num2, operator) {
  const operand1 = Big(num1);
  const operand2 = Big(num2);

  switch (operator) {
    case '+':
      return operand1.plus(operand2).toString();
    case '-':
      return operand1.minus(operand2).toString();
    case '*':
      return operand1.times(operand2).toString();
    case '/':
      return operand2.eq(0) ? "Can't divide by 0." : operand1.div(operand2).toString();
    case '%':
      return operand2.eq(0) ? "Can't find modulo as can't divide by 0." : operand1.mod(operand2).toString();
    default:
      return 'Unknown operation';
  }
}
