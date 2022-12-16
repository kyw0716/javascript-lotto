const { Console } = require("@woowacourse/mission-utils");
const { GuideString, ResultString, StaticValue } = require("../static/Static");

const OutPutView = {
  printError(error) {
    Console.print(error);
  },

  printLottoNumber(lottos) {
    Console.print(`${lottos.length}` + GuideString.NOTICE_PURCHASE_COUNT);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  },

  printRank(ranks) {
    Console.print(ResultString.RANK5 + `${ranks[0]}개`);
    Console.print(ResultString.RANK4 + `${ranks[1]}개`);
    Console.print(ResultString.RANK3 + `${ranks[2]}개`);
    Console.print(ResultString.RANK2 + `${ranks[3]}개`);
    Console.print(ResultString.RANK1 + `${ranks[4]}개`);
  },

  printRevenue(revenue, purchaseLottoAmount) {
    const result = (
      (revenue / (purchaseLottoAmount * StaticValue.LOTTO_UNIT)) *
      100
    ).toFixed(1);

    Console.print(
      ResultString.REVENUE_HEAD + `${result}` + ResultString.REVENUE_TAIL
    );
    Console.close();
  },
};

module.exports = OutPutView;
