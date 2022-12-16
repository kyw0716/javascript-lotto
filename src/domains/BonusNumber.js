const { ErrorString, StaticValue } = require("../static/Static");

class BonusNumber {
  #bonusNumber;

  constructor(input, winningNumber) {
    const inputNumber = parseInt(input, 10);
    this.validate(input, winningNumber, inputNumber);

    this.#bonusNumber = inputNumber;
  }

  validate(input, winningNumber, inputNumber) {
    if (input === "") throw new Error(ErrorString.EMPTY_INPUT_ERROR);
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorString.BONUS_NUMBER_NOT_NUMBER_ERROR);
    if (this.checkRange(inputNumber))
      throw new Error(ErrorString.BONUS_NUMBER_RANGE_ERROR);
    if (winningNumber.includes(inputNumber))
      throw new Error(ErrorString.BONUS_NUMBER_DUPLICATE_ERROR);
  }

  checkRange(value) {
    return (
      value < StaticValue.LOTTO_NUMBER_RANGE_START ||
      value > StaticValue.LOTTO_NUMBER_RANGE_END
    );
  }

  getNumber() {
    return this.#bonusNumber;
  }
}

module.exports = BonusNumber;
