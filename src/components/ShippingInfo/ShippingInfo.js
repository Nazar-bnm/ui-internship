import React from 'react';
import cx from 'classnames';

import config from '../../../config';
const { shippingData } = config;

import './ShippingInfo.scss';

export const CN = 'shippingInfo';

const ShippingInfo = () => {
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
    <div className={`content container ${cx(CN)}`}>
      <hr className={`${cx(CN)}__line`}/>
      <ul className={`${cx(CN)}__list`}>
        {shippingInfo}
      </ul>
    </div>
  );
};

export default ShippingInfo;
