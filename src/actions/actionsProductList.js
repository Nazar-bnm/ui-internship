import { CHANGE_ITEMS_NUMBER_ON_PAGE, CHANGE_SORTING_ORDER, CHANGE_ORDER_TYPE } from '../constants/actionTypes';

export function changeSortingOrder() {
  return {
    type: CHANGE_SORTING_ORDER,
  };
};

export function changeOrderType(payload) {
  return {
    type: CHANGE_ORDER_TYPE,
    payload,
  };
};

export function changeitemsNumberOnPage(payload) {
  return {
    type: CHANGE_ITEMS_NUMBER_ON_PAGE,
    payload,
  };
};
