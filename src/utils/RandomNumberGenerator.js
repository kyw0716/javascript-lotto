const { Random } = require("@woowacourse/mission-utils");
const { StaticValue } = require("../static/Static");

const RandomNumberGenerator = {
  generate(count) {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      StaticValue.LOTTO_NUMBER_RANGE_START,
      StaticValue.LOTTO_NUMBER_RANGE_END,
      count
    );

    randomNumbers.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

    return randomNumbers;
  },
};

module.exports = RandomNumberGenerator;
