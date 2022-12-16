const { Console } = require("@woowacourse/mission-utils");
const { GuideString } = require("../static/Static");

const InputView = {
  readPurchasePrice(callback) {
    this.getUserInput(GuideString.PURCHASE_PRICE, callback);
  },

  readWinningNumber(callback) {
    this.getUserInput(GuideString.WINNING_NUMBER, callback);
  },

  readBonusNumber() {},

  getUserInput(guide, callback) {
    Console.readLine(guide, (input) => {
      callback(input);
    });
  },
};

module.exports = InputView;
