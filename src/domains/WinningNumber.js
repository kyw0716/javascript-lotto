const { ErrorString, StaticValue } = require("../static/Static");

class WinningNumber {
  #winningNumber;

  constructor(input) {
    const inputArray = input.split(",").map((v) => parseInt(v, 10));

    this.validate(input, inputArray);
    this.#winningNumber = inputArray;
  }

  validate(input, inputArray) {
    if (input === "") throw new Error(ErrorString.EMPTY_INPUT_ERROR);
    if (inputArray.length !== 6)
      throw new Error(ErrorString.WINNING_NUMBER_COUNT_ERROR);
    if (input.replace(/\d|\,/g, "").length > 0)
      throw new Error(ErrorString.WINNING_NUMBER_NOT_NUMBER_ERROR);
    if (inputArray.length !== new Set(inputArray).size)
      throw new Error(ErrorString.WINNING_NUMBER_DUPLICATE_ERROR);
    if (inputArray.filter((v) => this.checkRange(v)).length > 0)
      throw new Error(ErrorString.WINNING_NUMBER_RANGE_ERROR);
  }

  checkRange(value) {
    return (
      value < StaticValue.LOTTO_NUMBER_RANGE_START ||
      value > StaticValue.LOTTO_NUMBER_RANGE_END
    );
  }

  getNumber() {
    return this.#winningNumber;
  }
}

module.exports = WinningNumber;
