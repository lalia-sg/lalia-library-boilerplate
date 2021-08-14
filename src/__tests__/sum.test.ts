import sum, { SumInputs } from '../sum';

test('adds 1 + 2 to equal 3', () => {
  const inputs: SumInputs = {
    a: 1,
    b: 2,
  };

  expect(sum(inputs)).toBe(3);
});
