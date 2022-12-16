const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  readPurchasePrice() {},

  readWinningNumber() {},

  readBonusNumber() {},

  getUserInput(guide, callback) {
    Console.readLine(guide, (input) => {
      callback(input);
    });
  },
};
