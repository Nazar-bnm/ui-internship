import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PageSettings from './PageSettings';
import Button from '../Button';
import PageNavigation from './PageNavigation';
import BurgerMenu from '../BurgerMenu';
import Input from '../Input';
import './Header.scss';
import { burgerMenuItemsList, navConfig } from '../../config/headerMockups';
export const CN = 'header';

const Header = () => (
  <header className={cx(CN)}>
    <div className="wrapper color-secondary">
      <PageSettings/>
    </div>
    <div className={`${CN}__heading-search-cart-container content`}>
      <Link to={'/home'}>
        <h2 className={`${CN}__title`}>The shop</h2>
      </Link>
      <div className={`${CN}__buttons-container`}>
        <BurgerMenu menuItemsList={burgerMenuItemsList}/>
        <Input icon="search" customClass={`${CN}__search-input`}>Search</Input>
        <Link to={'/404'}>
          <Button icon="cart" customClass={`${CN}__cart-btn`}>Cart (0)</Button>
        </Link>
      </div>
    </div>
    <PageNavigation options={navConfig} />
    <div className="wrapper _slider">Here will be slider</div>
  </header>
);
export default Header;
