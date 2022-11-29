const Lotto = require("../Lotto");
const { PRICE_FOR_ONE_LOTTO } = require("../static/Static");
const { LottoNumberGenerator } = require("../utils/LottoNumberGenerator");
const { InputView } = require("../view/InputView");
const { OutputView } = require("../view/OutputView");

class LottoGameController {
  #lottos = [];

  constructor() {}

  inputPurchasePrice() {
    InputView.readPurchasePrice((input) => {
      const purchaseAmount = input / PRICE_FOR_ONE_LOTTO;

      OutputView.printPurchaseAmount(purchaseAmount);

      for (let i = 0; i < purchaseAmount; i++) {
        this.#lottos.push(new Lotto(LottoNumberGenerator.generate()));
      }

      this.displayPurchasedLottos();
    });
  }

  displayPurchasedLottos() {
    OutputView.printLottos(this.#lottos);
  }
}

module.exports = { LottoGameController };

new LottoGameController().inputPurchasePrice();
