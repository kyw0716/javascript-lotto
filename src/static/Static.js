const StaticNumber = Object.freeze({
  PRICE_FOR_ONE_LOTTO: 1000,
  LOTTO_NUMBER_RANGE_START: 1,
  LOTTO_NUMBER_RANGE_END: 45,
  LOTTO_NUMBER_COUNT: 6,
});

const GuideString = Object.freeze({
  INPUT_PURCHASE_PRICE: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
});

module.exports = {
  StaticNumber,
  GuideString,
};
