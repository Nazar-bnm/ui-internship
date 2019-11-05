import React from 'react';
import cx from 'classnames';

import Accordion from '../Accordion';
import LoginRegister from './LoginRegister';
import BillingInfo from './BillingInfo';
// import ShippingInfo from './ShippingInfo';
// import ShippingMethod from './ShippingMethod';
// import Payment from './Payment';
// import OrderReview from './OrderReview';

import './Checkout.scss';

const CN = 'checkout';
const data = [
  {
    title: '01. Checkout',
    id: 1,
    description: <LoginRegister />
  },
  {
    title: '02. Billing Info',
    id: 2,
    description: <BillingInfo />
  }
  // {
  //   title: '03. Shipping Info',
  //   id: 3,
  //   description: <ShippingInfo />
  // },
  // {
  //   title: '04. Shipping Method',
  //   id: 4,
  //   description: <ShippingMethod />
  // },
  // {
  //   title: '05. Payment',
  //   id: 5,
  //   description: <Payment />
  // },
  // {
  //   title: '06. Order review',
  //   id: 6,
  //   description: <OrderReview />
  // }
];
// console.log('data ', data);
// console.log(data)

const Checkout = () => (
  <div className={`${cx(CN)}-wrapper content`}>
    <Accordion
      className={`${CN}__accordion`}
      heightItem="auto"
      data={data}
      open
    />
  </div>
);

export default Checkout;
