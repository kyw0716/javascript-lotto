const GuideString = Object.freeze({
  PURCHASE_PRICE: "구입금액을 입력해 주세요.\n",
  NOTICE_PURCHASE_COUNT: "개를 구매했습니다.",
  WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
});

const StaticValue = Object.freeze({
  LOTTO_UNIT: 1000,
  LOTTO_NUMBER_RANGE_START: 1,
  LOTTO_NUMBER_RANGE_END: 45,
  LOTTO_NUMBER_COUNT: 6,
});

const ErrorString = Object.freeze({
  EMPTY_INPUT_ERROR: "[ERROR] 입력값이 비어있습니다.",
  PURCHASE_PRICE_UNIT_ERROR:
    "[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.",
  PURCHASE_PRICE_NOT_NUMBER_ERROR:
    "[ERROR] 구입 금액은 숫자만 입력해야 합니다.",
  WINNING_NUMBER_COUNT_ERROR: "[ERROR] 로또 번호는 6개여야 합니다.",
  WINNING_NUMBER_DUPLICATE_ERROR:
    "[ERROR] 로또 번호는 중복을 포함할 수 없습니다.",
  WINNING_NUMBER_NOT_NUMBER_ERROR:
    "[ERROR] 로또 번호는 숫자만 입력 가능합니다.",
});

module.exports = { GuideString, StaticValue, ErrorString };
