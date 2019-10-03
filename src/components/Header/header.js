import React from 'react';
import PageSettings from './PageSettings';
import Button from '../Button';
import PageNavigation from './PageNavigation';
import BurgerMenu from '../BurgerMenu';
import navConfig from '../../config/Header';
import Input from '../Input';
import { burgerMenuItemsList } from '../../config/Header';
import { Link } from 'react-router-dom';
import './_header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper color-secondary">
        <PageSettings/>
      </div>
      <div className="heading-search-cart-container content">
        <Link to={'/home'}>
          <h2 className="header__title">The shop</h2>
        </Link>
        <div className="buttons-container">
          <BurgerMenu menuItemsList={burgerMenuItemsList}/>
          <Input icon="search" customClass="search-input">Search</Input>
          <Link to={'/404'}>
            <Button icon="cart" customClass="cart-btn">Cart (0)</Button>
          </Link>
        </div>
      </div>
      <PageNavigation options={navConfig} />
      <div className="wrapper _slider">Here will be slider</div>
    </header>
  );
};

export default Header;
