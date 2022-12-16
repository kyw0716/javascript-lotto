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
  LOTTO_RANK_COUNT: 5,
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
  WINNING_NUMBER_RANGE_ERROR:
    "[ERROR] 로또 번호는 1 - 45 사이의 숫자만 입력 가능합니다.",
  BONUS_NUMBER_NOT_NUMBER_ERROR:
    "[ERROR] 보너스 번호는 숫자만 입력 가능합니다.",
  BONUS_NUMBER_DUPLICATE_ERROR:
    "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  BONUS_NUMBER_RANGE_ERROR:
    "[ERROR] 보너스 번호는 1-45 범위를 벗어날 수 없습니다.",
});

const ResultString = Object.freeze({
  RANK5: "3개 일치 (5,000원) - ",
  RANK4: "4개 일치 (50,000원) - ",
  RANK3: "5개 일치 (1,500,000원) - ",
  RANK2: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  RANK1: "6개 일치 (2,000,000,000원) - ",
  REVENUE_HEAD: "총 수익률은 ",
  REVENUE_TAIL: "%입니다.",
});

const WinningPrize = [5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000];

module.exports = {
  GuideString,
  StaticValue,
  ErrorString,
  ResultString,
  WinningPrize,
};
