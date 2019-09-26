import React from 'react';
import ContentOptions from './ContentOptions';
import AccountNavigation from './AccountNavigation';

const PageSettings = () => {
  <div className="content container">
    <ContentOptions grid="col-3"/>
    <h3 className="col-3 col-center">
        free shipping on orders above 50$
    </h3>
    <AccountNavigation grid="col-3"/>
  </div>;
};

export default PageSettings;
