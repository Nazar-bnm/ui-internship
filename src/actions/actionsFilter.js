import { CHECK_CHECKBOX } from '../constants/actionTypes';

export const checkCheckbox = (category, id, clicked) => ({ type: CHECK_CHECKBOX, payload: { category, id, clicked } });
