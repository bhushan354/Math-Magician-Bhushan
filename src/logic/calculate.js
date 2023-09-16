import operate from './Operate';

function checkNum(item) {
  const containsNumericDigits = /[0-9]+/.test(item);

  const isNumeric = !!containsNumericDigits;

  return isNumeric;
}

export default function calculate(inObject, numName) {
  if (numName === 'AC') {
    return {
      sum: null,
      newNum: null,
      action: null,
    };
  }

  switch (true) {
    case checkNum(numName):
      if (numName === '0' && inObject.newNum === '0') {
        return {};
      }
      // If here actn, updte newNum
      if (inObject.action) {
        if (inObject.newNum && inObject.newNum !== '0') {
          return { ...inObject, newNum: inObject.newNum + numName };
        }
        return { ...inObject, newNum: numName };
      }
      // to chek no actn, updat newNum nd clear the value
      if (inObject.newNum && inObject.newNum !== '0') {
        return {
          newNum: inObject.newNum + numName,
          sum: null,
        };
      }
      return {
        newNum: numName,
        sum: null,
      };

    default:
      break;
  }

  if (numName === '.') {
    if (inObject.newNum) {
      if (inObject.newNum.includes('.')) {
        return { ...inObject };
      }
      return { ...inObject, newNum: `${inObject.newNum}.` };
    }

    if (inObject.action) {
      return { ...inObject, newNum: '0.' };
    }

    if (inObject.sum) {
      if (inObject.sum.includes('.')) {
        return {};
      }
      return { ...inObject, newNum: `${inObject.sum}.` };
    }
    return { ...inObject, newNum: '0.' };
  }

  if (inObject.action) {
    if (inObject.sum && !inObject.newNum) {
      return { ...inObject, action: numName };
    }

    if (!inObject.sum) {
      return { sum: 0, action: numName };
    }

    return {
      sum: operate(inObject.sum, inObject.newNum, inObject.action),
      newNum: null,
      action: numName,
    };
  }

  if (!inObject.newNum) {
    return { action: numName };
  }

  if (numName === '+/-') {
    if (inObject.newNum) {
      return { ...inObject, newNum: (-1 * parseFloat(inObject.newNum)).toString() };
    }
    if (inObject.sum) {
      return { ...inObject, sum: (-1 * parseFloat(inObject.sum)).toString() };
    }
    return {};
  }

  if (numName === '=') {
    if (inObject.newNum && inObject.action) {
      return {
        sum: operate(inObject.sum, inObject.newNum, inObject.action),
        newNum: null,
        action: null,
      };
    }
    return {};
  }

  if (!inObject.newNum && inObject.sum && !inObject.action) {
    return { ...inObject, action: numName };
  }

  return {
    sum: inObject.newNum,
    action: numName,
    newNum: null,
  };
}
