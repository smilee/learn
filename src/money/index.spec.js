import Money from './index';
import Dollar from '../dollar';
import Franc from '../franc';

describe('Money', () => {
  context('when an instance is made', () => {
    it('has a value', () => {
      expect(new Money(5).amount).toBe(5);
    });
  });

  context('when equals method is called', () => {
    it('checks whether the given object is equal to itself', () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
      expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
      expect(new Franc(5).equals(new Franc(5))).toBe(true);
      expect(new Franc(5).equals(new Franc(6))).toBe(false);
      expect(new Dollar(5).equals(new Franc(5))).toBe(false);
    });
  });
});
