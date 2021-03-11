function test() {
  return 'Hello, world!';
}

describe('test()', () => {
  context('when the function is run', () => {
    it('greets the world', () => {
      expect(test()).toBe('Hello, world!');
    });
  });
});
