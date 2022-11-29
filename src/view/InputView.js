const { Console } = require("@woowacourse/mission-utils");
const { GuideString } = require("../static/Static");

const InputView = {
  readPurchasePrice(callback, validate) {
    Console.readLine(GuideString.INPUT_PURCHASE_PRICE, (input) => {
      validate(input);
      callback(input);
    });
  },

  readWinningNumber(callback, validate) {
    Console.readLine(GuideString.INPUT_WINNING_NUMBER, (input) => {
      validate(input);
      callback(input);
    });
  },

  readBonusNumber(callback, validate, winningNumbers) {
    Console.readLine(GuideString.INPUT_BONUS_NUMBER, (input) => {
      validate(input, winningNumbers);
      callback(input);
    });
  },
};

module.exports = { InputView };
