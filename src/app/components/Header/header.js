import React from 'react';
import PageSettings from './PageSettings';
import Button from '../Button';
import PageNavigation from './PageNavigation';

const navItems = [
  { value: 'women', label: 'women' },
  { value: 'men', label: 'men' },
  { value: 'kids', label: 'kids' },
  { value: 'accs', label: 'accessories' },
  { value: 'new', label: 'whats new' },
  { value: 'brands', label: 'brands' },
  { value: 'sale', label: 'sale' },
  { value: 'blog', label: 'blog' },
];

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper color-secondary">
        <PageSettings/>
      </div>
      <h2>The shop</h2>
      <Button icon="search">Search</Button>
      <Button icon="cart">Cart</Button>
      <PageNavigation options={navItems}/>
      <div className="wrapper _slider">asdasd</div>
    </header>
  );
};

export default Header;
