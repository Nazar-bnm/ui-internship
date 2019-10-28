import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './NotificationButtons.scss';

export const CN = 'notification-buttons';

const NotificationButtons = (props) => {
  const { showMessage } = props;

  const notificationTypeEnum = {
    info: {
      title: 'info',
      message: 'Information request was sent',
      type: 'info'
    },
    success: {
      title: 'success',
      message: 'Item is added to cart',
      type: 'success'
    },
    warning: {
      title: 'warning',
      message: 'Hey, be careful',
      type: 'warning'
    },
    error: {
      title: 'error',
      message: 'Oops, something wrong',
      type: 'error'
    },
    change: {
      title: 'change',
      message: 'Changing process',
      type: 'change'
    },
    custom: {
      title: 'custom',
      message: 'What is your custom question?',
      type: 'custom'
    }
  };

  return (
    <div className={cx(CN)}>
      <div>
        <button
          className={`${CN}__info`}
          type="button"
          onClick={() => showMessage(notificationTypeEnum.info)}
        >
           Info
        </button>
      </div>
      <div>
        <button
          className={`${CN}__success`}
          type="button"
          onClick={() => showMessage(notificationTypeEnum.success)}
        >
           Success
        </button>
      </div>
      <div>
        <button
          className={`${CN}__warning`}
          type="button"
          onClick={() => showMessage(notificationTypeEnum.warning)}
        >
           Warning
        </button>
      </div>
      <div>
        <button
          className={`${CN}__error`}
          type="button"
          onClick={() => showMessage(notificationTypeEnum.error)}
        >
           Error
        </button>
      </div>
      <div>
        <button
          className={`${CN}__custom`}
          type="button"
          onClick={() => showMessage(notificationTypeEnum.custom)}
        >
           Custom
        </button>
      </div>
      <div>
        <button
          className={`${CN}__change`}
          type="button"
          onClick={() => showMessage(notificationTypeEnum.change)}
        >
           Change
        </button>
      </div>
    </div>
  );
};

NotificationButtons.defaultProps = {
  type: PropTypes.oneOf([
  ])

};

export default NotificationButtons;
