import {
  NOTIFICATION_SHOW,
  NOTIFICATION_HIDE
} from '../constants/actionTypes';

export const isShowNotification = (payload) => ({
  type: NOTIFICATION_SHOW,
  payload
});

export const isHideNotification = () => ({
  type: NOTIFICATION_HIDE
});

const showMessage = (payload) => (dispatch) => {
  dispatch(isShowNotification(payload));
  setTimeout(() => {
    dispatch(isHideNotification());
  }, 4000);
};

export default showMessage;
