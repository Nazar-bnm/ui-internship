import { CHANGE_ITEMS_NUMBER_ON_PAGE, CHANGE_SORTING_ORDER, CHANGE_ORDER_TYPE } from '../constants/actionTypes';

const initialState = {
  ascendingOrder: true,
  orderType: 'Position',
  chosenItemsOnPage: 6,
};

export default function reducerProductList(state = initialState, action) {
  switch (action.type) {
  case CHANGE_SORTING_ORDER:
    return {
      ...state,
      ascendingOrder: !state.ascendingOrder,
    };
  case CHANGE_ORDER_TYPE:
    return {
      ...state,
      orderType: action.payload.orderType,
    };
  case CHANGE_ITEMS_NUMBER_ON_PAGE:
    return {
      ...state,
      chosenItemsOnPage: action.payload.chosenItemsOnPage,
    };
  default:
    return state;
  };
};
