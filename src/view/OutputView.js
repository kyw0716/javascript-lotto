const { Console } = require("@woowacourse/mission-utils");
const { StatisticString, GuideString } = require("../static/Static");

const OutputView = {
  printPurchaseAmount(amount) {
    Console.print(`\n${amount}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      Console.print(lottos[i].getSortedLottoNumber());
    }
  },

  printShowResultString() {
    Console.print(GuideString.SHOW_RESULT);
  },

  printWinningStatistic(winningStatistic) {
    const raps = winningStatistic.length;

    for (let i = 0; i < raps; i++) {
      Console.print(StatisticString[i] + `${winningStatistic.pop()}개`);
    }

    Console.close();
  },
};

module.exports = { OutputView };
