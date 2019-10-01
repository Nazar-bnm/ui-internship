import React from 'react';
import ContentOptions from './ContentOptions';
import AccountNavigation from './AccountNavigation';

const PageSettings = () => (
  <div className="content container">
    <ContentOptions/>
    <h3 className="heading">
        free shipping on orders above 50$
    </h3>
    <AccountNavigation/>
  </div>
);

export default PageSettings;
