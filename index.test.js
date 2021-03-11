// [ ] 통화가 다른 두 금액을 더해서 주어진 환율에 맞게 변한 금액을 결과로 얻을 수 있어야 한다
// [x] 어떤 금액(주가)을 어떤 수(주식의 수)에 곱한 금액을 결과로 얻을 수 있어야 한다

class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  multiply(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

describe('Dollar', () => {
  context('when an instance is made', () => {
    it('has a value', () => {
      expect(new Dollar(5).amount).toBe(5)
    })
  })

  context('when multiply method is called', () => {
    const dollar = new Dollar(3);
    let product;

    it('multiplies the amount by the multiplier', () => {
      product = dollar.multiply(5);
      expect(product.amount).toBe(15);
      product = dollar.multiply(3);
      expect(product.amount).toBe(9);
    })
  })
})

