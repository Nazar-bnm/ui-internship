import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { stripeKey } from '../../../config/stripeKey';
import { PAYMENT_SUCCESSED, PAYMENT_FAILED } from '../../../constants/notificationData';

import './Payment.scss';

const CN = 'payment';

const Payment = (props) => {
  const { totalCount } = props;

  async function handleToken(token) {
    const response = await axios.post(
      'https://hi3vv.sse.codesandbox.io/checkout',
      { token, totalCount }
    );

    const { status } = response.data;
    const { showMessage } = props;

    if (status === 'success') {
      showMessage(PAYMENT_SUCCESSED);
    } else {
      showMessage(PAYMENT_FAILED);
    }
  }

  return (
    <div className={(CN)}>
      <StripeCheckout
        stripeKey={stripeKey}
        token={handleToken}
        amount={totalCount * 100}
        billingAddress
        shippingAddress
      />
    </div>
  );
};

export default Payment;
