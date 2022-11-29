const { Random } = require("@woowacourse/mission-utils");

const LottoNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

module.exports = { LottoNumberGenerator };
