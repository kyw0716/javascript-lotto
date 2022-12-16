const PurchasedLottos = require("../domains/PurchasedLottos");
const InputView = require("../view/InputView");
const OutPutView = require("../view/OutputView");
const WinningNumber = require("../domains/WinningNumber");
const BonusNumber = require("../domains/BonusNumber");
const { WinningPrize } = require("../static/Static");

class LottoGameController {
  #lottos;
  #winningNumber;
  #bonusNumber;

  constructor() {}

  startGame() {
    this.inputPurchasePrice();
  }

  inputPurchasePrice() {
    InputView.readPurchasePrice((input) => {
      this.#lottos = new PurchasedLottos(input);
      this.handlePurchaseLottos();
    });
  }

  inputWinningNumber() {
    InputView.readWinningNumber((input) => {
      this.#winningNumber = new WinningNumber(input);

      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    InputView.readBonusNumber((input) => {
      this.#bonusNumber = new BonusNumber(
        input,
        this.#winningNumber.getNumber()
      );

      this.handleCacluateRank();
    });
  }

  handlePurchaseLottos() {
    const lottos = this.#lottos.getLottos();

    OutPutView.printLottoNumber(lottos);

    this.inputWinningNumber();
  }

  handleCacluateRank() {
    const ranks = this.#lottos.getRankStatistics(
      this.#winningNumber.getNumber(),
      this.#bonusNumber.getNumber()
    );

    OutPutView.printRank(ranks);

    this.handleCacluateRevenue(ranks);
  }

  handleCacluateRevenue(ranks) {
    let revenue = 0;

    ranks.forEach((rank, i) => {
      revenue += rank *= WinningPrize[i];
    });

    OutPutView.printRevenue(revenue, this.#lottos.getLottos().length);
  }
}

module.exports = LottoGameController;
