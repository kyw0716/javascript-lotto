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
}

module.exports = LottoGame;
