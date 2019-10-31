import {
  NOTIFICATION_SHOW,
  NOTIFICATION_HIDE
} from '../constants/actionTypes';

const initialState = {
  isShowNotification: false,
  type: null,
  message: null,
  title: null
};


export default function reducerNotifications(state = initialState, { type, payload }) {
  switch (type) {
    case NOTIFICATION_SHOW:
      return {
        ...state,
        isShowNotification: true,
        type: payload.type,
        message: payload.message,
        title: payload.title
      };
    case NOTIFICATION_HIDE:
      return {
        ...state,
        isShowNotification: false
      };
    default:
      return state;
  }
}
