import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// import { NOTIFICATION_TYPES } from '../../constants';

import './Notifications.scss';

export const CN = 'notifications';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.hideMessage = this.hideMessage.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
    this.renderNotifications = this.renderNotifications.bind(this);
  }

  hideMessage() {
    const { isHideNotification } = this.props;
    isHideNotification();
  }

  hideNotification() {
    const { removeItemNotification } = this.props;
    removeItemNotification();
  }

  renderNotifications() {
    const { notifications } = this.props;
    return notifications.map(({
      id,
      type,
      message,
      title
    }) => (
      <div
        className={cx(CN, type)}
        key={id}
        color={type}
        onClick={this.hideNotification}
      >
        <div>
          {title && <h4 className="title">{title}</h4>}
          <div className={`${CN}__notification-message-box`} role="alert">
            <div className={`${CN}__message`}>{message}</div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const {
      // id,
      // type,
      // message,
      // title,
      notifications
      // isShowNotification,
      // addItemNotification
    } = this.props;

    if (notifications.length === 0) {
      return null;
    }
    return this.renderNotifications();
    // return (
    //   <div
    //     className={cx(CN, type)}
    //     key={id}
    //     color={type}
    //     onClick={this.hideNotification}
    //   >
    //     <div>
    //       {title && <h4 className="title">{title}</h4>}
    //       <div className={`${CN}__notification-message-box`} role="alert">
    //         <div className={`${CN}__message`}>{message}</div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

Notifications.propTypes = {
  // type: PropTypes.oneOf([
  //   NOTIFICATION_TYPES.CHANGE,
  //   NOTIFICATION_TYPES.INFO,
  //   NOTIFICATION_TYPES.SUCCESS,
  //   NOTIFICATION_TYPES.WARNING,
  //   NOTIFICATION_TYPES.ERROR,
  //   NOTIFICATION_TYPES.CUSTOM
  // ]),
  // title: PropTypes.string,
  // message: PropTypes.string,
  isHideNotification: PropTypes.func.isRequired,
  removeItemNotification: PropTypes.func.isRequired
  // isShowNotification: PropTypes.func.isRequired,
  // addItemNotification: PropTypes.func.isRequired
};

Notifications.defaultProps = {
  // type: NOTIFICATION_TYPES.INFO,
  // title: 'Info',
  // message: 'Information is processing'
};

export default Notifications;
