import { CHECK_CHECKBOX, NULL_STATE_ON_PAGE_CHANGE } from '../constants/actionTypes';

export const checkCheckbox = (category, id, clicked) => ({ type: CHECK_CHECKBOX, payload: { category, id, clicked } });
export const nullState = () => ({ type: NULL_STATE_ON_PAGE_CHANGE });
