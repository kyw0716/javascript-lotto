const PurchasedLottos = require("../src/domains/PurchasedLottos");

describe("구입된 로또 클래스 테스트", () => {
  test("구입 금액에 유효하지 않은 값이 입력되면 예외가 발생한다.", () => {
    const INVALID_INPUTS = ["100j", "200", ""];
    for (let i = 0; i < INVALID_INPUTS.length; i++) {
      expect(() => {
        new PurchasedLottos(INVALID_INPUTS[i]);
      }).toThrow();
    }
  });
});
