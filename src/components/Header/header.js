import React from 'react';
import PageSettings from './PageSettings';
import Button from '../Button';
import PageNavigation from './PageNavigation';
import BurgerMenu from './BurgerMenu/';
import navConfig from '../../config/Header';
import Input from '../Input';
import './_header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper color-secondary">
        <PageSettings/>
      </div>
      <div className="heading-search-cart-container content">
        <h2 className="header__title">The shop</h2>
        <div className="buttons-container">
          <BurgerMenu />
          <Input icon="search" customClass="search-input">Search</Input>
          <Button icon="cart" customClass="cart-btn">Cart</Button>
        </div>
      </div>
      <PageNavigation options={navConfig} />
      <div className="wrapper _slider">asdasd</div>
    </header>
  );
};

export default Header;
