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

const ErrorString = Object.freeze({
  PURCHASE_PRICE_UNIT_ERROR:
    "[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.",
  PURCHASE_PRICE_NOT_NUMBER_ERROR:
    "[ERROR] 구입 금액은 숫자만 입력 가능합니다.",
  WINNING_NUMBER_COUNT_ERROR: `[ERROR] 당첨 번호는 ${StaticNumber.LOTTO_NUMBER_COUNT}개 입력해야 합니다.`,
  WINNING_NUMBER_NOT_NUMBER_ERROR:
    "[ERROR] 당첨 번호는 숫자만 입력 가능합니다.",
  WINNING_NUMBER_OUT_OF_RANGE_ERROR:
    "[ERROR] 당첨 번호는 1 ~ 45 범위 내의 숫자만 입력 가능합니다.",
  WINNING_NUMBER_DUPLICATE_ERROR:
    "[ERROR] 당첨 번호는 중복되지 않는 숫자만 입력 가능합니다.",
  BONUS_NUMBER_NOT_NUMBER_ERROR:
    "[ERROR] 보너스 번호는 숫자만 입력 가능합니다.",
  BONUS_NUMBER_OUT_OF_RANGE_ERROR:
    "[ERROR] 보너스 번호는 1 ~ 45 범위 내의 숫자만 입력 가능합니다.",
  BONUS_NUMBER_DUPLICATE_ERROR:
    "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
});

module.exports = {
  StaticNumber,
  GuideString,
  ErrorString,
};
