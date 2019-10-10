import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './BurgerMenu.scss';

export const CN = 'burger-menu';

const BurgerMenu = ({ menuItemsList }) => {
  const renderMenu = () => menuItemsList.map(({ itemName, url }) => {
    return (
      <Link key={itemName} to={url} className={`${CN}__link`}>
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
  menuItemsList: PropTypes.arrayOf(PropTypes.shape({
    itemName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
};

export default BurgerMenu;
