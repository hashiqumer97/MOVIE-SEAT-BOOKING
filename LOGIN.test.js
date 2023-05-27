const { checkLogin } = require('./LOGINTEST');

describe('checkLogin function', () => {
  test('should return true for valid username and password', () => {
    const username = 'hashiq';
    const password = 'hashiq123';

    const result = checkLogin(username, password);

    expect(result).toBe(true);
  });

  test('should return false for invalid username and password', () => {
    const username = 'john';
    const password = 'password123';

    const result = checkLogin(username, password);

    expect(result).toBe(false);
  });
});
