import React from 'react';
import './BurgerMenu.scss';

const BurgerMenu = () => {
  return (
    <div className="burger-menu-container">
      <nav>
        <input type="checkbox" id="burgerbutton" />
        <label htmlFor="burgerbutton" className="burgerimage" title="Navigation">&#x2630;</label>
        <ul className="burger-list">
          <li>
            <a className="burger-menu-link" href="#" title="Link">Link</a>
          </li>
          <li>
            <a className="burger-menu-link" href="#" title="Link">Link</a>
          </li>
          <li>
            <a className="burger-menu-link" href="#" title="Link">Link</a>
          </li>
          <li>
            <a className="burger-menu-link" href="#" title="Link">Link</a>
          </li>
          <li>
            <a className="burger-menu-link" href="#" title="Link">Link</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
