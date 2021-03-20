import Dollar from './index';

describe('Dollar', () => {
  context('when an instance is made', () => {
    it('has a value', () => {
      expect(new Dollar(5).amount).toBe(5);
    });
  });

  context('when times method is called', () => {
    const dollar = new Dollar(3);

    it('multiplies the amount by the multiplier', () => {
      expect(new Dollar(15)).toEqual(dollar.times(5));
      expect(new Dollar(9)).toEqual(dollar.times(3));
    });
  });
});
