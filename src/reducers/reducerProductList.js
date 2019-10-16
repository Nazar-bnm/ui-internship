import { CHANGE_ITEMS_NUMBER_ON_PAGE,
  CHANGE_SORTING_ORDER,
  CHANGE_ORDER_TYPE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../constants/actionTypes';

const initialState = {
  ascendingOrder: true,
  orderType: 'Position',
  chosenItemsOnPage: 6,
  itemList: [],
  error: null,
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
  case GET_PRODUCTS_SUCCESS:
    return {
      ...state,
      itemList: action.products,
      error: null,
    };
  case GET_PRODUCTS_ERROR:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  };
};
