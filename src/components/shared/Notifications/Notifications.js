import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { NOTIFICATION_TYPES } from '../../../constants';
import './Notifications.scss';

export const CN = 'notifications';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.hideMessage = this.hideMessage.bind(this);
  }

  hideMessage() {
    const { isHideNotification } = this.props;
    isHideNotification();
  }

  render() {
    const {
      type,
      message,
      title,
      isShowNotification
    } = this.props;

    return isShowNotification && (
      <div
        className={cx(CN, type)}
        color={type}
        onClick={this.hideMessage}
      >
        <div onClick={this.onNotificationClick}>
          {title && <h4 className="title">{title}</h4>}
          <div className={`${CN}__notification-message-box`} role="alert">
            <div className={`${CN}__message`}>{message}</div>
          </div>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  type: PropTypes.oneOf([
    NOTIFICATION_TYPES.CHANGE,
    NOTIFICATION_TYPES.INFO,
    NOTIFICATION_TYPES.SUCCESS,
    NOTIFICATION_TYPES.WARNING,
    NOTIFICATION_TYPES.ERROR,
    NOTIFICATION_TYPES.CUSTOM
  ]),
  title: PropTypes.string,
  message: PropTypes.string
};

Notifications.defaultProps = {
  type: NOTIFICATION_TYPES.INFO,
  title: 'Info',
  message: 'Information is processing'
};

export default Notifications;
