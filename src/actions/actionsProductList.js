import {
  CHANGE_ITEMS_NUMBER_ON_PAGE,
  CHANGE_SORTING_ORDER,
  CHANGE_ORDER_TYPE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_FETCHED_ITEMS_NUMBER
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

export function getFetchedItemsNumber(payload) {
  return {
    type: GET_FETCHED_ITEMS_NUMBER,
    payload
  };
}
