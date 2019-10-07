import React from 'react';
import './BurgerMenu.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ menuItemsList }) => {
  const renderMenu = () => menuItemsList.map(({ itemName }) => {
    return (
      <Link key={itemName} to={'/404'} className="burger-menu__link">
        <li key={itemName} className="burger-menu__list-item">{ itemName }</li>
      </Link>
    );
  });

  return (
    <div className="burger-menu">
      <nav className="burger-menu__navigation">
        <input type="checkbox" id="burger-menu__button" />
        <label htmlFor="burger-menu__button" className="burger-menu__image" title="Navigation">&#x2630;</label>
        <ul className="burger-menu__list">
          {renderMenu()}
        </ul>
      </nav>
    </div>
  );
};

BurgerMenu.propTypes = {
  menuItemsList: PropTypes.array,
};

export default BurgerMenu;
