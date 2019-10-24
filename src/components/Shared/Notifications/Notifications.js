import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { TYPES } from '../../../constants/notificationTypes';

import './Notifications.scss';

export const CN = 'notifications';

const Notifications = (props) => {
  const {
    type,
    message,
    onClick,
    title,
    onRequestHide,
    showCloseButton
  } = props;

  // console.log(props);

  const requestHide = () => {
    onRequestHide && onRequestHide();
  };

  const onNotificationClick = () => {
    onClick && onClick();
  };

  const renderCloseButton = () => {
    // console.log(showCloseButton);
  //   const span = {<span
  //   className={`${CN}__close-btn`}
  //   onClick={requestHide}
  // >
  //   <i className={`${CN}__close-icon close icon`} />
  // </span>}
    if (showCloseButton) {
      return (
        <span
          className={`${CN}__close-btn`}
          onClick={requestHide}
        >
          {/* <button type="button"> */}
          <i className={`${CN}__close-icon close icon`} />
          {/* </button> */}

        </span>
      );
    } return null;


    // console.log(currentBtn);

    // return currentBtn;
  };

  const renderTitle = () => {
    // console.log(title);
    const currentTitle = (title ? (
      <h4 className="title">{title}</h4>
    ) : null);
    // console.log(currentTitle);


    return currentTitle;
  };

  return (
    <div
      className={cx(CN, type)}
      color={type}
    >
      {renderCloseButton()}
      <div onClick={onNotificationClick}>
        {renderTitle()}
        <div className={`${CN}__notification-message-box`} role="alert">
          <div className={`${CN}__message`}>{message}</div>
        </div>
      </div>
    </div>

  // <div
  //   className={cx(CN, type)}
  //   color={type}
  // >
  //   <span
  //     msg={text}
  //     onClick={onNotificationClick}
  //   >
  //     Operation
  //     {text}
  //   </span>
  //   <button
  //     type="submit"
  //     className={`${CN}__close-btn`, type}
  //   >
  //     <i className={`${CN}__close-btn-icon close icon`} />
  //   </button>
  // </div>
  );
};


Notifications.propTypes = {
  type: PropTypes.oneOf([
    TYPES.CHANGE,
    TYPES.INFO,
    TYPES.SUCCESS,
    TYPES.WARNING,
    TYPES.ERROR,
    TYPES.CUSTOM
  ]),
  onClick: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string
};

Notifications.defaultProps = {
  type: TYPES.SUCCESS,
  onClick: null,
  title: 'Seccess',
  message: 'hello'
};

export default Notifications;
