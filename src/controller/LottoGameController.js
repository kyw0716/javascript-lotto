const Lotto = require("../Lotto");
const LottoGame = require("../LottoGame");
const { StaticNumber, ErrorString } = require("../static/Static");
const { LottoNumberGenerator } = require("../utils/LottoNumberGenerator");
const { InputView } = require("../view/InputView");
const { OutputView } = require("../view/OutputView");

class LottoGameController {
  #lottoGame = new LottoGame();

  constructor() {}

  inputPurchasePrice() {
    InputView.readPurchasePrice(
      this.inputPurchasePriceCallback,
      this.validatePurchasePrice
    );
  }

  inputWinnigNumber() {
    InputView.readWinningNumber(
      this.inputWinnigNumberCallback,
      this.validateWinningNumbers
    );
  }

  inputBonusNumber() {
    InputView.readBonusNumber(
      this.inputBonusNumberCallback,
      this.validateBonusNumbers,
      this.#lottoGame.getWinningNumbers()
    );
  }

  purchaseLottos(purchaseAmount) {
    for (let i = 0; i < purchaseAmount; i++) {
      this.#lottoGame
        .getLottos()
        .push(new Lotto(LottoNumberGenerator.generate()));
    }

    this.displayPurchasedLottos();
  }

  displayPurchasedLottos() {
    OutputView.printLottos(this.#lottoGame.getLottos());

    this.inputWinnigNumber();
  }

  inputPurchasePriceCallback = (input) => {
    const purchaseAmount = input / StaticNumber.PRICE_FOR_ONE_LOTTO;

    OutputView.printPurchaseAmount(purchaseAmount);
    this.purchaseLottos(purchaseAmount);
  };

  inputWinnigNumberCallback = (input) => {
    const winningNumbers = input.split(",");

    this.#lottoGame.setWinningNumbers(winningNumbers);
    this.inputBonusNumber();
  };

  inputBonusNumberCallback = (input) => {
    this.#lottoGame.setBonusNumber(input);
  };

  validatePurchasePrice(input) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorString.PURCHASE_PRICE_NOT_NUMBER_ERROR);
    if (input % 1000 !== 0 || Number(input) === 0)
      throw new Error(ErrorString.PURCHASE_PRICE_UNIT_ERROR);
  }

  validateWinningNumbers(input) {
    const inputNumbers = input.split(",");

    if (inputNumbers.length !== StaticNumber.LOTTO_NUMBER_COUNT)
      throw new Error(ErrorString.WINNING_NUMBER_COUNT_ERROR);
    if (input.replace(/\d|\,/g, "").length > 0)
      throw new Error(ErrorString.WINNING_NUMBER_NOT_NUMBER_ERROR);
    if (inputNumbers.filter((v) => v > 45 || v < 1).length > 0)
      throw new Error(ErrorString.WINNING_NUMBER_OUT_OF_RANGE_ERROR);
    if (inputNumbers.length !== new Set(inputNumbers).size)
      throw new Error(ErrorString.WINNING_NUMBER_DUPLICATE_ERROR);
  }

  validateBonusNumbers(input, winningNumbers) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorString.BONUS_NUMBER_NOT_NUMBER_ERROR);
    if (input > 45 || input < 1)
      throw new Error(ErrorString.BONUS_NUMBER_OUT_OF_RANGE_ERROR);
    if (winningNumbers.includes(input))
      throw new Error(ErrorString.BONUS_NUMBER_DUPLICATE_ERROR);
  }
}

module.exports = { LottoGameController };
