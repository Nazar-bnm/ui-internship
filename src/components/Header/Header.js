import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import PageSettings from './PageSettings';
import Button from '../Shared/Button';
import PageNavigation from './PageNavigation';
import BurgerMenu from '../BurgerMenu';
import Input from '../Input';
import config from '../../../config';

import './Header.scss';

const { burgerMenuItemsList, navConfig } = config;
export const CN = 'header';

const Header = () => (
  <header className={cx(CN)}>
    <div
      className="wrapper color-secondary"
    >
      <PageSettings />
    </div>
    <div className={`${CN}__heading-search-cart-container content`}>
      <Link to="/home">
        <h2 className={`${CN}__title`}>The shop</h2>
      </Link>
      <div className={`${CN}__buttons-container`}>
        <BurgerMenu menuItemsList={burgerMenuItemsList} />
        <Input icon="search" customClass={`${CN}__search-input`}>Search</Input>
        <Link to="/404">
          <Button icon="cart" customClass={`${CN}__cart-btn`}>Cart (0)</Button>
        </Link>
      </div>
    </div>
    <PageNavigation options={navConfig} />
  </header>
);

export default Header;
