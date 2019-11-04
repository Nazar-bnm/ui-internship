import React from 'react';
import cx from 'classnames';

const CN = 'login-register';

class BillingInfo extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const {
      hide,
      onClick,
      height,
      scroll
    } = this.props;
    const heightStyle = {
      height
    };

    return (
      <div className={CN}>
        <div
          className={cx(`${CN}__header`, { [`${CN}__header--active`]: !hide })}
          onClick={onClick}
        >
          <h4>02. billing info</h4>
          <i className={cx('caret', 'right', 'icon', { 'icon--down': !hide })} />
        </div>

        <div
          className={cx([`${CN}__description`], {
            [`${CN}__description--hide`]: hide,
            [`${CN}__description--show`]: !hide,
            scroll
          })}
          style={!hide ? heightStyle : {}}
        />
      </div>
    );
  }
}

export default BillingInfo;
