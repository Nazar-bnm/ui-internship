import React from 'react';
import cx from 'classnames';

import AccordionCheckout from './AccordionCheckout';
import { accordionItemsData } from './dataItems';

import './Checkout.scss';

const CN = 'checkout';

const Checkout = () => (
  <div className={`${cx(CN)}-wrapper content`}>
    <AccordionCheckout data={accordionItemsData} heightItem="100px" />
  </div>
);

export default Checkout;
