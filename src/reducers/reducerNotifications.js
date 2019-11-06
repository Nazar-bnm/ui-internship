import {
  NOTIFICATION_ITEM_ADD_TO_LIST,
  NOTIFICATION_ITEM_REMOVE_FROM_LIST
} from '../constants/actionTypes';

const initialState = [];

export default function reducerNotifications(state = initialState, { type, payload }) {
  switch (type) {
    case NOTIFICATION_ITEM_ADD_TO_LIST:
      return [...state, payload];
    case NOTIFICATION_ITEM_REMOVE_FROM_LIST:
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
}
