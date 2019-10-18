import { CHECK_CHECKBOX, UNCHECK_CHECKBOX } from '../constants/actionTypes';

export const checkCheckbox = (category) => ({ type: CHECK_CHECKBOX, payload: category });
export const uncheckCheckbox = (category) => ({ type: UNCHECK_CHECKBOX, payload: category });
