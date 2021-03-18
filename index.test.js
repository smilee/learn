// [ ] 통화가 다른 두 금액을 더해서 주어진 환율에 맞게 변한 금액을 결과로 얻을 수 있어야 한다 (예: $5 + 10CHF = $10(환율이 2:1일 경우))
// [x] 어떤 금액(주가)을 어떤 수(주식의 수)에 곱한 금액을 결과로 얻을 수 있어야 한다 (예: $5 X 2 = $10)
// [ ] amount를 private로 만들기
// [x] Dollar 부작용(side effect)?
// [ ] Money 반올림?
// [x] equals()
// [ ] hashCode()
// [ ] Equal null
// [ ] Equal object

class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equals(object) {
    const dollar = object;
    return this.amount === dollar.amount;
  }
}

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

  context('when equals method is called', () => {
    it('checks whether the given object is equal to itself', () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
      expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    });
  });
});
