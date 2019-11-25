import React from 'react';

import { Button } from '@/shared';

import './WebsiteNavigation.scss';

const CN = 'website-navigation';

const WebsiteNavigation = ({ className }) => {
  const { pathname } = window.location;

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className={`${CN}__wrapper content ${className}`}>
      <div className={`${CN}__pathname`}>
        Home
        {pathname}
      </div>
      <Button
        className={`${CN}__button`}
        onClick={goBack}
      >
        &#60; Return to the previous page
      </Button>
    </div>
  );
};

export default WebsiteNavigation;
