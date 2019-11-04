import {
  NOTIFICATION_SHOW,
  NOTIFICATION_HIDE,
  NOTIFICATION_ITEM_ADD_TO_LIST,
  NOTIFICATION_ITEM_REMOVE_FROM_LIST
} from '../constants/actionTypes';

const initialState = [];


export default function reducerNotifications(state = initialState, { type, payload }) {
  switch (type) {
    case NOTIFICATION_SHOW:
      return {
        ...state,
        isShowNotification: true,
        id: payload.id,
        type: payload.type,
        message: payload.message,
        title: payload.title
      };
    case NOTIFICATION_HIDE:
      return {
        ...state,
        isShowNotification: false
      };
    case NOTIFICATION_ITEM_ADD_TO_LIST:
      return [...state, payload];
    case NOTIFICATION_ITEM_REMOVE_FROM_LIST:
      return state.notificationList.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
}
