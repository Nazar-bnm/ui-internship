// import { CHECK_CHECKBOX, RESET_FILTERS, SET_PRICE_RANGE } from '../constants/actionTypes';
import {
  GET_THE_CURRENCY
  // GET_USD,
  // GET_EURO,
  // GET_UAH
} from '../constants/actionTypes';

// export const checkCheckbox = (category, id, clicked) => ({ type: CHECK_CHECKBOX, payload: { category, id, clicked } });
// export const resetFilterState = () => ({ type: RESET_FILTERS });
// export const setPriceRange = (value, label) => ({ type: SET_PRICE_RANGE, payload: { value, label } });

export const changeCurrency = (payload) => ({ type: GET_THE_CURRENCY, payload });
