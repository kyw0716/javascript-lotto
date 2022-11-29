const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printPurchaseAmount(amount) {
    Console.print(`\n${amount}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      Console.print(lottos[i].getSortedLottoNumber());
    }
  },
};

module.exports = { OutputView };
