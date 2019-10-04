import React from 'react';
import './BurgerMenu.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ menuItemsList }) => {
  const renderMenu = () => menuItemsList.map(({ itemName }) => {
    return (
      <Link key={itemName} to={'/404'} className="burger-menu-link">
        <li key={itemName} className="burger-list-item">{ itemName }</li>
      </Link>
    );
  });

  return (
    <div className="burger-menu-container">
      <nav className="burger-menu-navigation-container">
        <input type="checkbox" id="burgerbutton" />
        <label htmlFor="burgerbutton" className="burgerimage" title="Navigation">&#x2630;</label>
        <ul className="burger-list">
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
