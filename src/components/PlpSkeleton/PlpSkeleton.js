import React from 'react';

import HeaderSkeleton from '../HomePageSkeleton/HeaderSkeleton';

import './PlpSkeleton.scss';

const CN = 'plp-skeleton';

const PlpSkeleton = () => (
  <div className={`${CN} content`}>
    <HeaderSkeleton />
    <hr className={`${CN}__line`} />
    <div className={`${CN}__nav container`}>
        <div className={`${CN}__item`} />
      <div className={`${CN}__item col-2 col-right`} />
    </div>
    <div className={`${CN}__content container`}>
    <div className={`${CN}__filters col-3`}>
    <div className={`${CN}__item`}></div>
    <div className={`${CN}__category col-9`}></div>
    <div className={`${CN}__category col-9`}></div>
    </div>




    <div className={`${CN}__products col-9`}></div>
    </div>



  </div>
);

export default PlpSkeleton;
