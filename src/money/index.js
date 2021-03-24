export default class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static Dollar(amount) {
    return new Money(amount, 'USD');
  }

  static Franc(amount) {
    return new Money(amount, 'CHF');
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  equals(object) {
    const money = object;

    return this.amount === money.amount
      && this.currency === money.currency;
  }
}
