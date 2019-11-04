import { CHECK_CHECKBOX, RESET_FILTERS, SET_PRICE_RANGE } from '../constants/actionTypes';

export const checkCheckbox = (category, id, clicked) => ({ type: CHECK_CHECKBOX, payload: { category, id, clicked } });
export const resetFilterState = () => ({ type: RESET_FILTERS });
export const setPriceRange = (from, to) => ({ type: SET_PRICE_RANGE, payload: { from, to }});
