import React from 'react';
import cx from 'classnames';
import ContentOptions from './ContentOptions';
import AccountNavigation from './AccountNavigation';

export const CN = 'page-settings';

const PageSettings = () => (
  <div className={cx(CN, 'content container')}>
    <ContentOptions />
    <h3 className={`${CN}__heading heading`}>
        free shipping on orders above 50$
    </h3>
    <AccountNavigation />
  </div>
);

export default PageSettings;
