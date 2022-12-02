const { Random } = require("@woowacourse/mission-utils");
const { StaticNumber } = require("../static/Static");

const LottoNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(
      StaticNumber.LOTTO_NUMBER_RANGE_START,
      StaticNumber.LOTTO_NUMBER_RANGE_END,
      StaticNumber.LOTTO_NUMBER_COUNT
    );
  },
};

module.exports = { LottoNumberGenerator };
