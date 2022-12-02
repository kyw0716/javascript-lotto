const { StaticNumber, ErrorString } = require("../static/Static");
const { InputValidator } = require("../utils/InputValidator");

class WinningNumbers {
  #winningNumbers;

  constructor(userInput) {
    this.validate(userInput);
    this.#winningNumbers = userInput.split(",");
  }

  validate(input) {
    const inputNumbers = input.split(",");

    if (inputNumbers.length !== StaticNumber.LOTTO_NUMBER_COUNT)
      throw new Error(ErrorString.WINNING_NUMBER_COUNT_ERROR);
    if (input.replace(/\d|\,/g, "").length > 0)
      throw new Error(ErrorString.WINNING_NUMBER_NOT_NUMBER_ERROR);
    if (inputNumbers.filter(InputValidator.rangeFilterFunction).length > 0)
      throw new Error(ErrorString.WINNING_NUMBER_OUT_OF_RANGE_ERROR);
    if (inputNumbers.length !== new Set(inputNumbers).size)
      throw new Error(ErrorString.WINNING_NUMBER_DUPLICATE_ERROR);
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }
}

module.exports = WinningNumbers;
