export class Pair {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  equals(object) {
    const pair = object;
    return this.from === pair.from && this.to === pair.to;
  }

  hashCode() {
    return 0;
  }
}

export class Bank {
  constructor() {
    this.rates = new Map();
  }

  reduce(source, to) {
    return source.reduce(this, to);
  }

  addRate(from, to, rate) {
    this.rates.set(JSON.stringify(new Pair(from, to)), Number(rate));
  }

  rate(from, to) {
    if (from === to) return 1;
    const rate = this.rates.get(JSON.stringify(new Pair(from, to)));
    return Number(rate);
  }
}

export class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const amount = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  plus(addend) {
    return null;
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

  reduce(bank, to) {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
}
