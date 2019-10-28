import {
  CHANGE_ITEMS_NUMBER_ON_PAGE,
  CHANGE_SORTING_ORDER,
  CHANGE_ORDER_TYPE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from '../constants/actionTypes';

let numberOfItemsToRender = 6;

if (window.innerWidth <= 480) {
  numberOfItemsToRender = 4;
} else if (window.innerWidth <= 768) {
  numberOfItemsToRender = 3;
}

const initialState = {
  ascendingOrder: true,
  orderType: 'Position',
  chosenItemsOnPage: numberOfItemsToRender,
  itemList: [],
  error: null,
  dropdownSortingSelectedID: 0,
  dropdownItemsNumberSelectedID: 0
};

export default function reducerProductList(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SORTING_ORDER:
      return {
        ...state,
        ascendingOrder: !state.ascendingOrder
      };
    case CHANGE_ORDER_TYPE:
      return {
        ...state,
        orderType: action.payload.orderType
      };
    case CHANGE_ITEMS_NUMBER_ON_PAGE:
      return {
        ...state,
        chosenItemsOnPage: action.payload.chosenItemsOnPage
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        itemList: action.products,
        error: null
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
