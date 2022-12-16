const BonusNumber = require("../src/domains/BonusNumber");

describe("보너스 번호 클래스 테스트", () => {
  test("보너스 번호에 유효하지 않은 값이 입력되면 예외가 발생한다.", () => {
    const INVALID_INPUTS = ["j", "1", "47", "0", ""];
    const winningNumber = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < INVALID_INPUTS.length; i++) {
      expect(() => {
        new BonusNumber(INVALID_INPUTS[i], winningNumber);
      }).toThrow();
    }
  });
});
