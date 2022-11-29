class LottoGame {
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

  getWinningStatistic() {
    const winningStatistic = Array(5).fill(0);

    for (let i = 0; i < this.#lottos.length; i++) {
      const score = this.#lottos[i].getRank(
        this.#winningNumbers,
        this.#bonusNumber
      );
      if (score) winningStatistic[score - 1]++;
    }

    return winningStatistic;
  }
}

module.exports = LottoGame;
