const WinningNumber = require("../src/domains/WinningNumber");

describe("당첨 번호 클래스 테스트", () => {
  test("당첨 번호에 유효하지 않은 값이 입력되면 예외가 발생한다.", () => {
    const INVALID_INPUTS = [
      "j,2,3,4,5,6",
      "1,1,2,3,4,5,6",
      "1,2,3,4,5,47",
      "0,1,2,3,4,5,6",
      "1,2",
      "1,2,3,4,5,6,7,8,9",
    ];
    for (let i = 0; i < INVALID_INPUTS.length; i++) {
      expect(() => {
        new WinningNumber(INVALID_INPUTS[i]);
      }).toThrow();
    }
  });
});
