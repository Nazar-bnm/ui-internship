import React from 'react';
import cx from 'classnames';

const CN = 'order-review';

class Payment extends React.Component {
  render() {
    return (
      <div className={cx(CN)}>
        <div className={`${CN}__input-wrapper`}>
          <label htmlFor="card-holder">card holder*</label>
          <input type="text" name={CN} className={`${CN}__input`} />
        </div>
        <div className={`${CN}__input-wrapper`}>
          <label htmlFor="card-number">card number*</label>
          <input type="number" name={CN} className={`${CN}__input`} />
        </div>
        <div>
          <label htmlFor="expiration-date">expiration date*</label>
          {/* Add custom inputs */}
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="cvv">cvv*</label>
            <input type="password" name={CN} className={`${CN}__input`} />
          </div>
        </div>


      </div>
    );
  }
}

export default Payment;
