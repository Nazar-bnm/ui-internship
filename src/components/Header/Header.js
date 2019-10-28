import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import PageSettings from './PageSettings';
import PageNavigation from './PageNavigation';
import BurgerMenu from '../BurgerMenu';
import Input from '../Input';
import { burgerMenuItemsList, navConfig } from '../../config/headerMockups';

import './Header.scss';

export const CN = 'header';

const Header = () => (
  <header className={cx(CN)}>
    <div
      className="wrapper color-secondary"
    >
      <PageSettings />
    </div>
    <div className={`${CN}__heading-search-cart-container content`}>
      <Link to="/home" className={`${CN}__title-wrapper`}>
        <h2 className={`${CN}__title`}>The shop</h2>
      </Link>
      <div className={`${CN}__buttons-container`}>
        <BurgerMenu menuItemsList={burgerMenuItemsList} />
        <Input icon="search" placeholder="SEARCH" className={`${CN}__search-input`}>Search</Input>
        <Link to="/404">
          <div className={`${CN}__cart-btn`}>
            <i className="icon cart" />
            <p>Cart(0)</p>
          </div>
        </Link>
      </div>
    </div>
    <PageNavigation options={navConfig} />
  </header>
);

export default Header;
