export class Bank {
  reduce(source, to) {
    return source.reduce(to);
  }
}

export class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to)
  }
}

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

  plus(addend) {
    return new Sum(this, addend);
  }

  equals(object) {
    const money = object;

    return this.amount === money.amount
      && this.currency === money.currency;
  }

  reduce(to) {
    return this;
  }
}
