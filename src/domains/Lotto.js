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
    if (numbers.replace(/\d/g, "").length > 0)
      throw new Error(ErrorString.WINNING_NUMBER_NOT_NUMBER_ERROR);
  }

  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
