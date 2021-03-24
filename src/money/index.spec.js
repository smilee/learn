import Money from './index';

describe('Money', () => {
  context('when an instance is made', () => {
    it('has a value', () => {
      expect(new Money(5, 'USD').amount).toBe(5);
    });
  });

  context('when times method is called', () => {
    const dollar = new Money.Dollar(3);

    it('multiplies the amount by the multiplier', () => {
      expect(new Money.Dollar(15)).toEqual(dollar.times(5));
      expect(new Money.Dollar(9)).toEqual(dollar.times(3));
    });
  });

  context('when equals method is called', () => {
    it('checks whether the given object is equal to itself', () => {
      expect(new Money(5, 'CHF').equals(new Money.Franc(5))).toBe(true);
      expect(new Money(5, 'CHF').equals(new Money.Franc(6))).toBe(false);
    });
  });

  context('when an instance is created', () => {
    it('has a respective currency', () => {
      expect(new Money.Dollar(1).currency).toBe('USD');
      expect(new Money.Franc(1).currency).toBe('CHF');
    });
  });
});
