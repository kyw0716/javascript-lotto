const { ErrorString } = require("../static/Static");
const { InputValidator } = require("../utils/InputValidator");

class BonusNumber {
  #bonusNumber;

  constructor(userInput, winningNumbers) {
    this.validate(userInput, winningNumbers);
    this.#bonusNumber = userInput;
  }

  validate(input, winningNumbers) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorString.BONUS_NUMBER_NOT_NUMBER_ERROR);
    if (InputValidator.rangeFilterFunction(input))
      throw new Error(ErrorString.BONUS_NUMBER_OUT_OF_RANGE_ERROR);
    if (winningNumbers.includes(input))
      throw new Error(ErrorString.BONUS_NUMBER_DUPLICATE_ERROR);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

module.exports = BonusNumber;
