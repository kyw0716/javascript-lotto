const { Console } = require("@woowacourse/mission-utils");
const { GuideString } = require("../static/Static");

const OutPutView = {
  printError(error) {
    Console.print(error);
  },

  printLottoNumber(lottos) {
    Console.print(`${lottos.length}` + GuideString.NOTICE_PURCHASE_COUNT);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },
};

module.exports = OutPutView;
