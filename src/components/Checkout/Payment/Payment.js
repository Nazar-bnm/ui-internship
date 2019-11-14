import React from 'react';
import cx from 'classnames';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import axios from 'axios';

import './Payment.scss';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const CN = 'payment';

const Payment = (props) => {
  const { totalCount } = props;
  console.log('totalCount', totalCount);

  async function handleToken(token) {
    const response = await axios.post(
      'https://hi3vv.sse.codesandbox.io/checkout',
      { token }
    );
    const { status } = response.data;
    // eslint-disable-next-line no-console
    console.log('Response:', response.data);
    if (status === 'success') {
      toast('Success! Check email for details', { type: 'success' });
    } else {
      toast('Something went wrong', { type: 'error' });
    }
  }

  return (
    <div className={cx(CN)}>
      <StripeCheckout
        stripeKey="pk_test_q7q6RtscsNRaRZnaBHuoRC7x00fupiksw6"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={totalCount}
      />
    </div>
  );
};

export default Payment;
