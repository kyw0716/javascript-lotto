const { ErrorString, StaticNumber } = require("../static/Static");

const InputValidator = {
  validatePurchasePrice(input) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorString.PURCHASE_PRICE_NOT_NUMBER_ERROR);
    if (input % StaticNumber.PRICE_FOR_ONE_LOTTO !== 0 || Number(input) === 0)
      throw new Error(ErrorString.PURCHASE_PRICE_UNIT_ERROR);
  },

  validateWinningNumbers(input) {
    const inputNumbers = input.split(",");

    if (inputNumbers.length !== StaticNumber.LOTTO_NUMBER_COUNT)
      throw new Error(ErrorString.WINNING_NUMBER_COUNT_ERROR);
    if (input.replace(/\d|\,/g, "").length > 0)
      throw new Error(ErrorString.WINNING_NUMBER_NOT_NUMBER_ERROR);
    if (inputNumbers.filter(InputValidator.rangeFilterFunction).length > 0)
      throw new Error(ErrorString.WINNING_NUMBER_OUT_OF_RANGE_ERROR);
    if (inputNumbers.length !== new Set(inputNumbers).size)
      throw new Error(ErrorString.WINNING_NUMBER_DUPLICATE_ERROR);
  },

  validateBonusNumber(input, winningNumbers) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorString.BONUS_NUMBER_NOT_NUMBER_ERROR);
    if (InputValidator.rangeFilterFunction(input))
      throw new Error(ErrorString.BONUS_NUMBER_OUT_OF_RANGE_ERROR);
    if (winningNumbers.includes(input))
      throw new Error(ErrorString.BONUS_NUMBER_DUPLICATE_ERROR);
  },

  rangeFilterFunction(value) {
    return (
      value > StaticNumber.LOTTO_NUMBER_RANGE_END ||
      value < StaticNumber.LOTTO_NUMBER_RANGE_START
    );
  },
};

module.exports = { InputValidator };
