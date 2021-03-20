import Money from './index';

describe('Money', () => {
  context('when an instance is made', () => {
    it('has a value', () => {
      expect(new Money(5).amount).toBe(5);
    });
  });

  context('when equals method is called', () => {
    it('checks whether the given object is equal to itself', () => {
      expect(new Money(5).equals(new Money(5))).toBe(true);
      expect(new Money(5).equals(new Money(6))).toBe(false);
    });
  });
});
