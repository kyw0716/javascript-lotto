const { Console } = require("@woowacourse/mission-utils");
const {
  StatisticString,
  GuideString,
  StaticNumber,
} = require("../static/Static");

const OutputView = {
  printPurchaseAmount(amount) {
    Console.print(`${amount}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      Console.print(`[${lottos[i].getSortedLottoNumber().join(", ")}]`);
    }
  },

  printWinningStatistic(winningStatistic) {
    const raps = winningStatistic.length;

    for (let i = 0; i < raps; i++) {
      Console.print(
        StatisticString[i] +
          `${winningStatistic[StaticNumber.TOTAL_LOTTO_RANKS - 1 - i]}개`
      );
    }
  },

  printRevenueRate(revenueRate) {
    Console.print(`총 수익률은 ${revenueRate}%입니다.`);
    Console.close();
  },
};

module.exports = { OutputView };
