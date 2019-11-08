import React from 'react';
import cx from 'classnames';

import './ShippingInfo.scss';

const CN = 'shipping-info';

const ShippingInfo = () => (
  <div className={cx(CN)}>
       Unless otherwise agreed, the delivery is done by mail. The product will be delivered exclusively to the address the customer placed in the order form. The customer has to ensure that the address information cited is complete and correct. Additional costs caused by incompleted information are to be replaced by the customer.
    <br />
    <br />
       Once your shipment has been sent, you will receive tracking information by e-mail.
    <br />
    <br />
       Delivery information are not binding unless a delivery period has been exceptionally confirmed.
  </div>
);

export default ShippingInfo;
