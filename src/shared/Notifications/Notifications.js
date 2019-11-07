import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './Notifications.scss';

export const CN = 'notifications';

const notificationIcons = {
  info: {
    type: 'info',
    icon: 'info icon'
  },
  success: {
    type: 'success',
    icon: 'check circle '
  },
  warning: {
    type: 'warning',
    icon: 'exclamation triangle'
  },
  error: {
    type: 'error',
    icon: 'x icon'
  },
  change: {
    type: 'change',
    icon: 'pencil alternate'
  },
  custom: {
    type: 'custom',
    icon: 'wrench'
  }
};

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.hideNotification = this.hideNotification.bind(this);
    this.renderNotifications = this.renderNotifications.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  hideNotification(id) {
    const { removeItemNotification } = this.props;
    removeItemNotification(id);
  }

  renderIcon(type) {
    switch (type) {
      case notificationIcons.info.type:
        return notificationIcons.info.icon;
      case notificationIcons.success.type:
        return notificationIcons.success.icon;
      case notificationIcons.warning.type:
        return notificationIcons.warning.icon;
      case notificationIcons.error.type:
        return notificationIcons.error.icon;
      case notificationIcons.change.type:
        return notificationIcons.change.icon;
      case notificationIcons.custom.type:
        return notificationIcons.custom.icon;
      default: return null;
    }
  }


  renderNotifications() {
    const { notifications } = this.props;
    return notifications.map(({
      id,
      type,
      message,
      title
    }) => {
      const iconName = this.renderIcon(type);
      return (
        <div
          className={cx(CN, type)}
          id={id}
          key={id}
          color={type}
          onClick={() => this.hideNotification(id)}
        >
          <div className={`${CN}__ntf-box`}>
            <div>
              <i className={`${CN}__icon icon ${iconName}`} />
            </div>
            <div className={`${CN}__notification-message-box`} role="alert">
              {title && <h4 className={`${CN}__title`}>{title}</h4>}
              <div className={`${CN}__message`}>{message}</div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const {
      notifications
    } = this.props;

    if (notifications.length === 0) {
      return null;
    }
    return (
      <div className={`${CN}__wrapper`}>
        {this.renderNotifications()}
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  removeItemNotification: PropTypes.func.isRequired
};

export default Notifications;
