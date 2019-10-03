import React from 'react';
import './BurgerMenu.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ menuItemsList }) => {
  return (
    <div className="burger-menu-container">
      <nav className="burger-menu-navigation-container">
        <input type="checkbox" id="burgerbutton" />
        <label htmlFor="burgerbutton" className="burgerimage" title="Navigation">&#x2630;</label>
        <ul className="burger-list">
          { menuItemsList.map((el) => {
            return (
              <Link key={el.itemName} to={'/404'} className="burger-menu-link">
                <li key={el.itemName} className="burger-list-item">{ el.itemName }</li>
              </Link>);
          })}
        </ul>
      </nav>
    </div>
  );
};

BurgerMenu.propTypes = {
  menuItemsList: PropTypes.array,
};

export default BurgerMenu;
