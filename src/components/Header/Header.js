import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';

import PageSettings from './PageSettings';
import PageNavigation from './PageNavigation';
import BurgerMenu from '^/BurgerMenu';
import Input from '^/Input';
import config from '@/../config';

import './Header.scss';

const { burgerMenuItemsList, navConfig } = config;
export const CN = 'header';

const Header = ({ userCart }) => (
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
        <Input icon="search" className={`${CN}__search-input`} />
        <Link to="/cart" className={`${CN}-cart-link`}>
          <i className={`cart icon ${CN}-cart-link__icon`} />
          <span className={` ${CN}-cart-link__title`}>{`Cart (${userCart.length})`}</span>
        </Link>
      </div>
    </div>
    <PageNavigation options={navConfig} />
  </header>
);

Header.propTypes = {
  userCart: PropTypes.array
};

Header.defaultProps = {
  userCart: []
};

export default Header;
