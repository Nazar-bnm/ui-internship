import React from 'react';
import PageSettings from './PageSettings';
import Button from '../Button';
import PageNavigation from './PageNavigation';
import navConfig from '../../config/Header';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper color-secondary">
        <PageSettings/>
      </div>
      <h2 className="header__title">The shop</h2>
      <Button icon="search">Search</Button>
      <Button icon="cart">Cart</Button>
      <PageNavigation options={navConfig}/>
      <div className="wrapper _slider">asdasd</div>
    </header>
  );
};

export default Header;
