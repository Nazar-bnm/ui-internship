import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';

import PageSettings from './PageSettings';
import Button from '../shared/Button';
import PageNavigation from './PageNavigation';
import BurgerMenu from '../BurgerMenu';
import Input from '../Input';
import { burgerMenuItemsList, navConfig } from '../../config/headerMockups';

import './Header.scss';

export const CN = 'header';

const Header = ({ userCart }) => (
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
        <Link to="/cart">
          <Button icon="cart" customClass={`${CN}__cart-btn`}>
            {`Cart (${userCart.length})`}
          </Button>
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
