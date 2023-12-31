import { EVENT_MONTH } from './common.js';

export const ERROR_COMMON = {
  DATE: '날짜',
  ORDER: '주문',
  ERROR_TAG: '[ERROR]',
  ENTER_AGAIN: '다시 입력해 주세요.'
};

export const RESTAURANT_MESSAGES = Object.freeze({
  WELCOME_MESSAGE: `안녕하세요! 우테코 식당 ${EVENT_MONTH} 이벤트 플래너입니다.`,
  EVENT_PREVIEW_MESSAGE: (day) => `${EVENT_MONTH} ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
});

export const RESTAURANT_QUESTION = Object.freeze({
  ASK_VISIT_DATE: `${EVENT_MONTH} 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해주세요!)\n`,
  ASK_MENU: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const ERROR_MESSAGES = Object.freeze({
  INVALID: (dateOrOrder) => `${ERROR_COMMON.ERROR_TAG} 유효하지 않은 ${dateOrOrder}입니다. ${ERROR_COMMON.ENTER_AGAIN}`,
  ORDER_INVALID: (errorReason) => `${ERROR_COMMON.ERROR_TAG} 유효하지 않은 ${ERROR_COMMON.ORDER}입니다. ${errorReason} ${ERROR_COMMON.ENTER_AGAIN}`,
});