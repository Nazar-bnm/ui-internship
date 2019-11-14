import React from 'react';

import { Button } from '@/shared';
import './YouWillAlsoLove.scss';

const CN = 'you-will-also-love';

const YouWillAlsoLove = () => (
  <div className={`${CN} content`}>
    <h2 className={`${CN}__title`}>you will also love</h2>

    <div className={`${CN}__item`}>
      <img
        alt="product"
        className={`${CN}__image`}
        src="src/assets/img/content/new1.png"
      />
      <div className={`${CN}__item__description`}>
        <h3 className={`${CN}__item__title`}>detailed swing dress</h3>
        <span className={`${CN}__item__price`}>$1,875.00</span>
        <Button className={`${CN}__quickview-button`}>quickview</Button>
      </div>
    </div>

    <div className={`${CN}__item`}>
      <img
        alt="product"
        className={`${CN}__image`}
        src="src/assets/img/content/new1.png"
      />
      <div className={`${CN}__item__description`}>
        <h3 className={`${CN}__item__title`}>detailed swing dress</h3>
        <span className={`${CN}__item__price`}>$1,875.00</span>
        <Button className={`${CN}__quickview-button`}>quickview</Button>
      </div>
    </div>

    <div className={`${CN}__item`}>
      <img
        alt="product"
        className={`${CN}__image`}
        src="src/assets/img/content/new1.png"
      />
      <div className={`${CN}__item__description`}>
        <h3 className={`${CN}__item__title`}>detailed swing dress</h3>
        <span className={`${CN}__item__price`}>$1,875.00</span>
        <Button className={`${CN}__quickview-button`}>quickview</Button>
      </div>
    </div>
  </div>
);

export default YouWillAlsoLove;
