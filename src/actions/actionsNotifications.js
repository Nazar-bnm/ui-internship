import {
  NOTIFICATION_SHOW,
  NOTIFICATION_HIDE,
  NOTIFICATION_ITEM_ADD_TO_LIST,
  NOTIFICATION_ITEM_REMOVE_FROM_LIST
} from '../constants/actionTypes';

export const isShowNotification = (payload) => ({
  type: NOTIFICATION_SHOW,
  payload
});

export const isHideNotification = () => ({
  type: NOTIFICATION_HIDE
});

export const addItemNotification = (payload) => ({
  type: NOTIFICATION_ITEM_ADD_TO_LIST,
  payload: {
    id: parseInt(Math.random().toString().split('.')[1], 10),
    ...payload
  }
  // payload
});

export const removeItemNotification = (payload) => ({
  type: NOTIFICATION_ITEM_REMOVE_FROM_LIST,
  payload
});

const showMessage = (payload) => (dispatch) => {
  dispatch(addItemNotification(payload));
  setTimeout(() => {
    dispatch(removeItemNotification(payload));
  }, 5000);
};

export default showMessage;
