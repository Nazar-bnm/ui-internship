import { CHECK_CHECKBOX, RESET_FILTERS } from '../constants/actionTypes';

export const checkCheckbox = (category, id, clicked) => ({ type: CHECK_CHECKBOX, payload: { category, id, clicked } });
export const resetState = () => ({ type: RESET_FILTERS });
