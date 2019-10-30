import React from 'react';

import HeaderSkeleton from '../HomePageSkeleton/HeaderSkeleton';

import './PlpSkeleton.scss';

const CN = 'plp-skeleton';

const PlpSkeleton = () => (
  <div className={`${CN} content`}>
    <HeaderSkeleton />
    <hr className={`${CN}__line animation`} />
    <div className={`${CN}__nav container`}>
      <div className={`${CN}__item`} />
      <div className={`${CN}__item col-2 col-right`} />
    </div>
    <div className={`${CN}__content container`}>
      <div className={`${CN}__filters col-3`}>
        <div className={`${CN}__item`} />
        <div className={`${CN}__category col-11`}>
          <div className={`${CN}__title col-4 animation`} />
          <div className={`${CN}__paragraph col-6`} />
          <div className={`${CN}__paragraph col-6`} />
          <div className={`${CN}__paragraph col-6`} />
          <div className={`${CN}__paragraph col-6`} />
          <div className={`${CN}__paragraph col-6`} />
        </div>

        <div className={`${CN}__category col-11`}>
          <div className={`${CN}__title col-4`} />
          <div className={`${CN}__paragraph col-6`} />
          <div className={`${CN}__paragraph col-6`} />
          <div className={`${CN}__paragraph col-6`} />
          <div className={`${CN}__paragraph col-6`} />
          <div className={`${CN}__paragraph col-6`} />
        </div>
      </div>
      <div className={`${CN}__products col-9`}>
        <div className="container">
          <div className={`${CN}__item col-5`} />
          <div className="col-10"><hr /></div>
        </div>
        <div className={`${CN}__poster`} />
      </div>
    </div>

  </div>
);

export default PlpSkeleton;
