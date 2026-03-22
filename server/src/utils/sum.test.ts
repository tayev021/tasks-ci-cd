import { sum } from './sum';

describe('Test "sum" function', () => {
  test('sum(1, 2)', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
