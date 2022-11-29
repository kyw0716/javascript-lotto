const Lotto = require("../Lotto");
const LottoGame = require("../LottoGame");
const { PRICE_FOR_ONE_LOTTO } = require("../static/Static");
const { LottoNumberGenerator } = require("../utils/LottoNumberGenerator");
const { InputView } = require("../view/InputView");
const { OutputView } = require("../view/OutputView");

class LottoGameController {
  #lottoGame = new LottoGame();

  constructor() {}

  inputPurchasePrice() {
    InputView.readPurchasePrice((input) => {
      const purchaseAmount = input / PRICE_FOR_ONE_LOTTO;

      OutputView.printPurchaseAmount(purchaseAmount);
      this.purchaseLottos(purchaseAmount);
    });
  }

  inputWinnigNumber() {
    InputView.readWinningNumber((input) => {
      const winningNumbers = input.split(",");

      this.#lottoGame.setWinningNumbers(winningNumbers);
    });
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
}

module.exports = { LottoGameController };

new LottoGameController().inputPurchasePrice();
