const { ErrorString } = require("./static/Static");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error(ErrorString.LOTTO_COUNT_ERROR);
    if (numbers.length !== new Set(numbers).size)
      throw new Error(ErrorString.LOTTO_DUPLICATE_ERROR);
    if (numbers.join("").replace(/\d/g, "").length > 0)
      throw new Error(ErrorString.LOTTO_NOT_NUMBER_ERROR);
    if (numbers.filter((v) => v > 45 || v < 1).length > 0)
      throw new Error(ErrorString.LOTTO_OUT_OF_RANGE_ERROR);
  }

  getSortedLottoNumber() {
    return this.#numbers.sort((a, b) => a - b);
  }

  getRank(winningNumbers, bonusNumber) {
    const sameNumberCount = this.getSameNumberCount(winningNumbers);

    if (sameNumberCount === 3) return 5;
    if (sameNumberCount === 4) return 4;
    if (sameNumberCount === 5 || this.#numbers.includes(bonusNumber)) return 2;
    if (sameNumberCount === 5) return 3;
    if (sameNumberCount === 6) return 1;
  }

  getSameNumberCount(winningNumbers) {
    const count = winningNumbers
      .map((v) => Number(v))
      .filter((v) => this.#numbers.includes(v)).length;

    return count;
  }
}

module.exports = Lotto;
