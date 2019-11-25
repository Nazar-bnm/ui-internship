import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { stripeKey } from '../../../config/stripeKey';
import { PAYMENT_SUCCESSED, PAYMENT_FAILED } from '../../../constants/notificationData';
import HttpService from '../../../service/HttpService/httpService';

import './Payment.scss';

const CN = 'payment';

const Payment = (props) => {
  const { totalCount } = props;

  async function handleToken(token) {
    const { showMessage } = props;
    try {
      const response = await new HttpService().post(
        'https://hi3vv.sse.codesandbox.io/checkout',
        { token, totalCount }
      );

      const { status } = response.data;

      if (status === 'success') {
        showMessage(PAYMENT_SUCCESSED);
      }
    } catch (error) {
      showMessage(PAYMENT_FAILED);
      return error.response;
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
