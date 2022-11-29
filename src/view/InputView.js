const { Console } = require("@woowacourse/mission-utils");
const { GuideString } = require("../static/Static");

const InputView = {
  readPurchasePrice(callback) {
    Console.readLine(GuideString.INPUT_PURCHASE_PRICE, (input) => {
      callback(input);
    });
  },
};
