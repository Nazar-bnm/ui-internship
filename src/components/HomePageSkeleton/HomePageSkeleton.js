import React from 'react';

import HeaderSkeleton from './HeaderSkeleton';

import './HomePageSkeleton.scss';

const CN = 'skeleton';

const HomePageSkeleton = () => (
  <div className={CN}>
    <HeaderSkeleton />
    <div className="skeleton__slideshow">
      <div className={`${CN}__item`} />
      <div className={`${CN}__item`} />
      <div className={`${CN}__item`} />
    </div>
  </div>
);

export default HomePageSkeleton;
