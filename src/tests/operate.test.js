import operate from '../logic/Operate';

describe('operate', () => {
  it('should add two numbers', () => {
    const result = operate('5', '3', '+');
    expect(result).toBe('8');
  });

  it('should subtract two numbers', () => {
    const result = operate('10', '4', '-');
    expect(result).toBe('6');
  });

  it('should multiply two numbers', () => {
    const result = operate('5', '6', 'x');
    expect(result).toBe('30');
  });

  it('should divide two numbers', () => {
    const result = operate('10', '2', '÷');
    expect(result).toBe('5');
  });

  it('should handle division by zero', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should find modulo of two numbers', () => {
    const result = operate('10', '3', '%');
    expect(result).toBe('1');
  });

  it('should handle modulo by zero', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate('5', '3', '^')).toThrow("Unknown operation '^'");
  });
});
