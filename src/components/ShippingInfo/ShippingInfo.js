import React from 'react';

import cx from 'classnames';

import './ShippingInfo.scss';

export const CN = 'shippingInfo';

const ShippingInfo = () => {
  const shippingData = [
    { number: 1, title: 'free shipping', description: 'on all orders over 50$' },
    { number: 2, title: 'money back guarantee', description: 'on all orders' },
    { number: 3, title: 'worldwide delivery', description: 'to over 80 countries' },
  ];
  const shippingInfo = shippingData.map((elem) => (
    <li key={elem.number} className={`${CN}__list-item`}>
      <span className={`${CN}__item-number`}>0{elem.number}.</span>
      <div className={`${CN}__item-text__wrapper`}>
        <h5 className={`${CN}__item-text__title`}>{elem.title}</h5>
        <h6 className={`${CN}__item-text__description`}>{elem.description}</h6>
      </div>
    </li>
  ));

  return (
    <div className='content container'>
      <hr className={`${cx(CN)}__line`}/>
      <ul className={`${cx(CN)}__list`}>
        {shippingInfo}
      </ul>
    </div>
  );
};

export default ShippingInfo;
