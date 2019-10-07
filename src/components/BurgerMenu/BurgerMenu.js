import React from 'react';
import './BurgerMenu.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

export const CN = 'burger-menu';

const BurgerMenu = ({ menuItemsList }) => {
  const renderMenu = () => menuItemsList.map(({ itemName }) => {
    return (
      <Link key={itemName} to={'/404'} className={`${CN}__link`}>
        <li key={itemName} className={`${CN}__list-item`}>{ itemName }</li>
      </Link>
    );
  });

  return (
    <div className={cx(CN)}>
      <nav className={`${CN}__navigation`}>
        <input type="checkbox" id={`${CN}__button`} />
        <label htmlFor={`${CN}__button`} className={`${CN}__image`} title="Navigation">&#x2630;</label>
        <ul className={`${CN}__list`}>
          {renderMenu()}
        </ul>
      </nav>
    </div>
  );
};

BurgerMenu.propTypes = {
  menuItemsList: PropTypes.array,
  className: PropTypes.string,
};

export default BurgerMenu;
