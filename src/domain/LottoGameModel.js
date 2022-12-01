const { WinningPrize, StaticNumber } = require("../static/Static");

class LottoGameModel {
  #lottos = [];
  #winningNumbers;
  #bonusNumber;

  constructor() {}

  getLottos() {
    return this.#lottos;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = winningNumbers;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  getRankStatistic() {
    const RankStatistic = Array(StaticNumber.TOTAL_LOTTO_RANKS).fill(0);

    this.#lottos.forEach((lotto) => {
      const rank = lotto.getRank(this.#winningNumbers, this.#bonusNumber);

      if (rank) RankStatistic[rank - 1]++;
    });

    return RankStatistic;
  }

  getRevenueRate(winningStatistic) {
    const purchasePrice =
      this.#lottos.length * StaticNumber.PRICE_FOR_ONE_LOTTO;
    let revenue = 0;

    winningStatistic.forEach((v, i) => {
      revenue += WinningPrize[i] * v;
    });

    return ((revenue / purchasePrice) * 100).toFixed(
      StaticNumber.REVENUE_SIGNIFICANT_FIGURES
    );
  }
}

module.exports = LottoGameModel;
