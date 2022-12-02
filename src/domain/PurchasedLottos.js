const { ErrorString, StaticNumber } = require("../static/Static");
const { LottoNumberGenerator } = require("../utils/LottoNumberGenerator");
const Lotto = require("./Lotto");

class PurchasedLottos {
  #lottos = [];

  constructor(userInput) {
    const amount = userInput / StaticNumber.PRICE_FOR_ONE_LOTTO;

    this.validate(userInput);

    for (let i = 0; i < amount; i++) {
      this.#lottos.push(new Lotto(LottoNumberGenerator.generate()));
    }
  }

  validate(input) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error(ErrorString.PURCHASE_PRICE_NOT_NUMBER_ERROR);
    if (input % StaticNumber.PRICE_FOR_ONE_LOTTO !== 0 || Number(input) === 0)
      throw new Error(ErrorString.PURCHASE_PRICE_UNIT_ERROR);
  }

  getLottos() {
    return this.#lottos;
  }
}

module.exports = PurchasedLottos;
