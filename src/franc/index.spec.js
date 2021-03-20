import Franc from './index';

describe('Franc', () => {
  context('when an instance is made', () => {
    it('has a value', () => {
      expect(new Franc(5).amount).toBe(5);
    });
  });

  context('when times method is called', () => {
    const franc = new Franc(3);

    it('multiplies the amount by the multiplier', () => {
      expect(new Franc(15)).toEqual(franc.times(5));
      expect(new Franc(9)).toEqual(franc.times(3));
    });
  });
});
