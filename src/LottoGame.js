const { WinningPrize, StaticNumber } = require("./static/Static");

class LottoGame {
  #purchasePrice;
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

  setPurchasePrice(purchasePrice) {
    this.#purchasePrice = purchasePrice;
  }

  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = winningNumbers;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  getWinningStatistic() {
    const winningStatistic = Array(StaticNumber.TOTAL_LOTTO_RANKS).fill(0);

    for (let i = 0; i < this.#lottos.length; i++) {
      const score = this.#lottos[i].getRank(
        this.#winningNumbers,
        this.#bonusNumber
      );
      if (score) winningStatistic[score - 1]++;
    }

    return winningStatistic;
  }

  getRevenueRate(winningStatistic) {
    let revenue = 0;

    winningStatistic.forEach((v, i) => {
      revenue += WinningPrize[i] * v;
    });

    return ((revenue / this.#purchasePrice) * 100).toFixed(1);
  }
}

module.exports = LottoGame;
