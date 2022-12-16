const PurchasedLottos = require("../domains/PurchasedLottos");
const InputView = require("../view/InputView");
const OutPutView = require("../view/OutputView");
const { Console } = require("@woowacourse/mission-utils");

class LottoGameController {
  #lottos;

  constructor() {}

  startGame() {
    this.inputPurchasePrice();
  }

  inputPurchasePrice() {
    InputView.readPurchasePrice((input) => {
      try {
        this.#lottos = new PurchasedLottos(input);
        this.handlePurchaseLottos();
      } catch (error) {
        OutPutView.printError(error);
        Console.close();
      }
    });
  }

  handlePurchaseLottos() {
    const lottos = this.#lottos.getLottos();

    OutPutView.printLottoNumber(lottos);
  }
}

module.exports = LottoGameController;
