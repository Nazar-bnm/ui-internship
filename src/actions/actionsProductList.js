import {
  CHANGE_ITEMS_NUMBER_ON_PAGE,
  CHANGE_SORTING_ORDER,
  CHANGE_ORDER_TYPE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  CHANGE_DROPDOWN_SELECTED_ID,
  CHANGE_DROPDOWN_ITEMS_NUMBER_SELECTED_ID
} from '../constants/actionTypes';

export function changeSortingOrder() {
  return {
    type: CHANGE_SORTING_ORDER
  };
}

export function changeOrderType(payload) {
  return {
    type: CHANGE_ORDER_TYPE,
    payload
  };
}

export function changeitemsNumberOnPage(payload) {
  return {
    type: CHANGE_ITEMS_NUMBER_ON_PAGE,
    payload
  };
}

export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  };
}

export function getProductsError(error) {
  return {
    type: GET_PRODUCTS_ERROR,
    error
  };
}

export function changeDropdownSortingSelectedID(dropdownSortingSelectedID) {
  return {
    type: CHANGE_DROPDOWN_SELECTED_ID,
    dropdownSortingSelectedID
  };
}

export function changeDropdownItemsNumberSelectedID(dropdownItemsNumberSelectedID) {
  return {
    type: CHANGE_DROPDOWN_ITEMS_NUMBER_SELECTED_ID,
    dropdownItemsNumberSelectedID
  };
}
