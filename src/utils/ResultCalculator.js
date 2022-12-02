const { StaticNumber, WinningPrize } = require("../static/Static");

const ResultCalculator = {
  /**
   * @param Object props { lottos: 로또 객체 배열, winningNumbers: 당첨 번호 배열, bonusNumber: 보너스 번호 }
   * @returns {number[]} 구매한 로또 당첨 등수 통계
   */
  getRankStatistic(props) {
    const RankStatistic = Array(StaticNumber.TOTAL_LOTTO_RANKS).fill(0);

    props.lottos.forEach((lotto) => {
      const rank = lotto.getRank(props.winningNumbers, props.bonusNumber);

      if (rank) RankStatistic[rank - 1]++;
    });

    return RankStatistic;
  },

  /**
   * @param {Object} props {purchasedAmount: 구매한 로또 개수, winningStatistic: 로또 당첨 등수 통계}
   * @returns {string} 수익률
   */
  getRevenueRate(props) {
    const purchasePrice =
      Number(props.purchasedAmount) * StaticNumber.PRICE_FOR_ONE_LOTTO;
    let revenue = 0;

    props.winningStatistic.forEach((v, i) => {
      revenue += WinningPrize[i] * Number(v);
    });

    return ((revenue / purchasePrice) * 100).toFixed(
      StaticNumber.REVENUE_SIGNIFICANT_FIGURES
    );
  },
};

module.exports = ResultCalculator;
