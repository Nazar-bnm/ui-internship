import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './BurgerMenu.scss';

export const CN = 'burger-menu';

const BurgerMenu = ({ menuItemsList }) => {
  const renderMenu = () => menuItemsList.map(({ itemName, url }) => (
    <li key={itemName} className={`${CN}__list-item`}>
      <Link to={url} className={`${CN}__link`}>
        {itemName}
      </Link>
    </li>
  ));

  return (
    <div className={cx(CN)}>
      <nav className={`${CN}__navigation`}>
        <input type="checkbox" id={`${CN}__button`} />
        <label className={`${CN}__image`} htmlFor={`${CN}__button`} title="Navigation">&#x2630;</label>
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
    url: PropTypes.string.isRequired
  })).isRequired
};

export default BurgerMenu;
