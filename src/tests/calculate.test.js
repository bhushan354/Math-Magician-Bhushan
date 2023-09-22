import calculate from '../logic/calculate';

describe('calculate', () => {
  it(' clear the calculator when "AC" button is pressed', () => {
    const result = calculate({ total: '123', next: '456', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it(' handle the "=" button', () => {
    const input = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(input).toEqual({ total: '15', next: null, operation: null });
  });

  it(' handle the "+/-" button', () => {
    const input = calculate({ total: null, next: '5', operation: null }, '+/-');
    expect(input).toEqual({ total: null, next: '-5', operation: null });
  });

  it(' handle operation button presses', () => {
    const input = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(input).toEqual({ total: '15', next: null, operation: '-' });
  });

  it(' handle consecutive operation button presses', () => {
    const input = calculate({ total: '10', next: '5', operation: '+' }, '+');
    expect(input).toEqual({ total: '15', next: null, operation: '+' });
  });
});
