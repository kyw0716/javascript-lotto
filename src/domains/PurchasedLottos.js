const { StaticValue, ErrorString } = require("../static/Static");
const RandomNumberGenerator = require("../utils/RandomNumberGenerator");
const Lotto = require("../domains/Lotto");

class PurchasedLottos {
  #lottos = [];

  constructor(input) {
    const purchaseAmount = parseInt(input, 10) / StaticValue.LOTTO_UNIT;

    this.validate(input);

    for (let i = 0; i < purchaseAmount; i++) {
      const randomNumbers = RandomNumberGenerator.generate(
        StaticValue.LOTTO_NUMBER_COUNT
      );
      this.#lottos.push(new Lotto(randomNumbers));
    }
  }

  validate(input) {
    const purchasePrice = parseInt(input, 10);
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorString.PURCHASE_PRICE_NOT_NUMBER_ERROR);
    if (input === "") throw new Error(ErrorString.EMPTY_INPUT_ERROR);
    if (purchasePrice % StaticValue.LOTTO_UNIT > 0)
      throw new Error(ErrorString.PURCHASE_PRICE_UNIT_ERROR);
  }

  getLottos() {
    return this.#lottos;
  }

  getRankStatistics(winningNumber, bonusNumber) {
    const rank = new Array(StaticValue.LOTTO_RANK_COUNT).fill(0);

    this.#lottos.forEach((lotto) => {
      const lottoRank = lotto.getRank(winningNumber, bonusNumber);
      if (lottoRank !== undefined)
        rank[StaticValue.LOTTO_RANK_COUNT - lottoRank] += 1;
    });

    return rank;
  }
}

module.exports = PurchasedLottos;
