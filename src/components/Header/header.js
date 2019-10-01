import React from 'react';
import PageSettings from './PageSettings';
import Button from '../Button';
import PageNavigation from './PageNavigation';
import navConfig from '../../config/Header';
import './_header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper color-secondary">
        <PageSettings/>
      </div>
      <div className="heading-search-cart-container">
        <h2 className="header__title">The shop</h2>
        <div className="buttons-container">
          <Button icon="search">Search</Button>
          <Button icon="cart">Cart</Button>
        </div>
      </div>
      <PageNavigation options={navConfig} />
      <div className="wrapper _slider">asdasd</div>
    </header>
  );
};

export default Header;
