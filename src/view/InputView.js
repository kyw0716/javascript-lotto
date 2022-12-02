const { Console } = require("@woowacourse/mission-utils");
const { GuideString } = require("../static/Static");

const InputView = {
  readPurchasePrice(callback) {
    this.getUserInput(GuideString.INPUT_PURCHASE_PRICE, callback);
  },

  readWinningNumber(callback) {
    this.getUserInput(GuideString.INPUT_WINNING_NUMBER, callback);
  },

  readBonusNumber(callback) {
    this.getUserInput(GuideString.INPUT_BONUS_NUMBER, callback);
  },

  getUserInput(guide, callback) {
    Console.readLine(guide, (input) => {
      callback(input);
    });
  },
};

module.exports = { InputView };
