const { Random } = require("@woowacourse/mission-utils");
const {
  LOTTO_NUMBER_RANGE_START,
  LOTTO_NUMBER_RANGE_END,
  LOTTO_NUMBER_COUNT,
} = require("../static/Static");

const LottoNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_RANGE_START,
      LOTTO_NUMBER_RANGE_END,
      LOTTO_NUMBER_COUNT
    );
  },
};

module.exports = { LottoNumberGenerator };
