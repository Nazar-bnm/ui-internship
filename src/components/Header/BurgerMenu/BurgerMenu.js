import React from 'react';
import Button from '../../Button';

const BurgerMenu = () => {
  return (
    <div className="burger-menu-container">
      <Button icon="bars" customClass="burger-menu-btn"></Button>
    </div>
  );
};

export default BurgerMenu;
