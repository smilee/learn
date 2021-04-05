function isEqual(x, y) {
  return parseFloat(x) === parseFloat(y);
}

function guessAgain(x, oldGuess) {
  return ((x / oldGuess) + oldGuess) / 2;
}

function squareRoot(x, guess, numDecimalPlaces) {
  if (isEqual(
    (x / guess).toFixed(numDecimalPlaces),
    guess.toFixed(numDecimalPlaces),
  )) {
    return parseFloat(guess.toFixed(numDecimalPlaces));
  }

  return squareRoot(x, guessAgain(x, guess), numDecimalPlaces);
}

test('squareRoot', () => {
  expect(squareRoot(4, 2, 0)).toBe(2);
  expect(squareRoot(3, 1.25, 2)).toBe(1.73);
  expect(squareRoot(5, 2, 3)).toBe(2.236);
});

test('isEqual', () => {
  expect(isEqual(2, 2)).toBe(true);
  expect(isEqual(2.2, 2.2)).toBe(true);
  expect(isEqual('2.2', '2.2')).toBe(true);
});

test('guessAgain', () => {
  expect(guessAgain(5, 2)).toBe(2.25);
  expect(guessAgain(3, 1.25)).toBe(1.825);
});
