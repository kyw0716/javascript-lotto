const { ErrorString } = require("../static/Static");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ErrorString.WINNING_NUMBER_COUNT_ERROR);
    }
    if (numbers.length !== new Set(numbers).size)
      throw new Error(ErrorString.WINNING_NUMBER_DUPLICATE_ERROR);
  }

  getNumbers() {
    return this.#numbers;
  }

  getCorrectNumberCount(winningNumber) {
    let count = 0;

    for (let i = 0; i < winningNumber.length; i++) {
      if (winningNumber.includes(this.#numbers[i])) count += 1;
    }

    return count;
  }

  getRank(winningNumber, bonusNumber) {
    const correctNumberCount = this.getCorrectNumberCount(winningNumber);

    if (correctNumberCount === 3) return 5;
    if (correctNumberCount === 4) return 4;
    if (correctNumberCount === 5 && this.#numbers.includes(bonusNumber))
      return 2;
    if (correctNumberCount === 5) return 3;
    if (correctNumberCount === 6) return 1;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
