const { StaticNumber } = require("../static/Static");
const { InputView } = require("../view/InputView");
const { OutputView } = require("../view/OutputView");
const PurchasedLottos = require("../domain/PurchasedLottos");
const WinningNumbers = require("../domain/WinningNumbers");
const BonusNumber = require("../domain/BonusNumber");
const ResultCalculator = require("../utils/ResultCalculator");

class LottoGameController {
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor() {}

  startGame() {
    this.inputPurchasePrice();
  }

  inputPurchasePrice() {
    InputView.readPurchasePrice((input) => {
      this.purchaseLottos(input);
    });
  }

  inputWinnigNumber() {
    InputView.readWinningNumber((input) => {
      this.#winningNumbers = new WinningNumbers(input);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    InputView.readBonusNumber((input) => {
      this.#bonusNumber = new BonusNumber(
        input,
        this.#winningNumbers.getWinningNumbers()
      );

      this.displayRankStatistic();
    });
  }

  purchaseLottos(input) {
    this.#lottos = new PurchasedLottos(input);

    OutputView.printPurchaseAmount(input / StaticNumber.PRICE_FOR_ONE_LOTTO);
    OutputView.printLottos(this.#lottos.getLottos());

    this.inputWinnigNumber();
  }

  displayRankStatistic() {
    const winningStatistic = ResultCalculator.getRankStatistic({
      lottos: this.#lottos.getLottos(),
      winningNumbers: this.#winningNumbers.getWinningNumbers(),
      bounsNumber: this.#bonusNumber.getBonusNumber(),
    });

    OutputView.printRankStatistic(winningStatistic);
    OutputView.printRevenueRate(
      ResultCalculator.getRevenueRate({
        winningStatistic: winningStatistic,
        purchasedAmount: this.#lottos.getLottos().length,
      })
    );
  }
}

module.exports = { LottoGameController };
