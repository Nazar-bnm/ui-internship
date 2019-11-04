import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../constants/actionTypes';

export const fetchProductsPending = () => ({ type: FETCH_PRODUCTS_PENDING });

export const fetchProductsSuccess = (products) => ({ type: FETCH_PRODUCTS_SUCCESS, products });

export const fetchProductsError = (error) => ({ type: FETCH_PRODUCTS_ERROR, error });
