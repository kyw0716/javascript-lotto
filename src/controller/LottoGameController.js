const Lotto = require("../domain/Lotto");
const LottoGameModel = require("../domain/LottoGameModel");
const { StaticNumber } = require("../static/Static");
const { LottoNumberGenerator } = require("../utils/LottoNumberGenerator");
const { InputView } = require("../view/InputView");
const { OutputView } = require("../view/OutputView");
const { InputValidator } = require("../utils/InputValidator");

class LottoGameController {
  #lottoGame = new LottoGameModel();

  constructor() {}

  startGame() {
    this.inputPurchasePrice();
  }

  inputPurchasePrice() {
    InputView.readPurchasePrice(this.callbackInputPurchasePrice);
  }

  inputWinnigNumber() {
    InputView.readWinningNumber(this.callbackInputWinningNumber);
  }

  inputBonusNumber() {
    InputView.readBonusNumber(this.callbackInputBonusNumber);
  }

  callbackInputPurchasePrice = (input) => {
    const purchaseAmount = input / StaticNumber.PRICE_FOR_ONE_LOTTO;

    InputValidator.validatePurchasePrice(input);

    this.displayPurchaseAmount(purchaseAmount);
  };

  callbackInputWinningNumber = (input) => {
    const winningNumbers = input.split(",");

    InputValidator.validateWinningNumbers(input);

    this.#lottoGame.setWinningNumbers(winningNumbers);
    this.inputBonusNumber();
  };

  callbackInputBonusNumber = (input) => {
    InputValidator.validateBonusNumber(
      input,
      this.#lottoGame.getWinningNumbers()
    );

    this.#lottoGame.setBonusNumber(input);
    this.displayRankStatistic();
  };

  displayPurchaseAmount(purchaseAmount) {
    OutputView.printPurchaseAmount(purchaseAmount);

    this.purchaseLottos(purchaseAmount);
  }

  displayPurchasedLottos() {
    OutputView.printLottos(this.#lottoGame.getLottos());

    this.inputWinnigNumber();
  }

  displayRankStatistic() {
    const winningStatistic = this.#lottoGame.getRankStatistic();

    OutputView.printRankStatistic(winningStatistic);
    OutputView.printRevenueRate(
      this.#lottoGame.getRevenueRate(winningStatistic)
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
}

module.exports = { LottoGameController };
