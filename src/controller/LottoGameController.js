const Lotto = require("../Lotto");
const { PRICE_FOR_ONE_LOTTO } = require("../static/Static");
const { LottoNumberGenerator } = require("../utils/LottoNumberGenerator");
const { InputView } = require("../view/InputView");

class LottoGameController {
  #lottos = [];

  constructor() {}

  inputPurchasePrice() {
    InputView.readPurchasePrice((input) => {
      const purchaseAmount = input / PRICE_FOR_ONE_LOTTO;

      for (let i = 0; i < purchaseAmount; i++) {
        this.#lottos.push(new Lotto(LottoNumberGenerator.generate()));
      }
    });
  }
}
