import React from 'react';
import Button from '../../Button';
import { itemsArray } from '../productItems';
import './PageSwitcher.scss';

export const CN = 'page-switcher';

const PageSwitcher = ({ chosenItemsOnPage }) => {
  const itemsNumber = itemsArray.length;
  const lastPage = Math.ceil(itemsNumber / chosenItemsOnPage);

  const renderPrevPageSet = () => {
    console.log('renderPrevPageSet');
  };

  const renderNextPageSet = () => {
    console.log('renderNextPageSet');
  };

  const renderItemsOnPage = () => {
    console.log('renderItemsPage');
  };

  return (
    <div className={`${CN}__wrapper`}>
      <Button icon='angle left' customClass={`${CN}__angle-btn`} onClickFunction={renderPrevPageSet}/>
      <Button customClass={`${CN}__btn-clicked`} onClickFunction={renderItemsOnPage}>1</Button>
      <Button customClass={`${CN}__btn`} onClickFunction={renderItemsOnPage}>2</Button>
      <Button customClass={`${CN}__btn`} onClickFunction={renderItemsOnPage}>3</Button>
      <span>...</span>
      <Button customClass={`${CN}__btn`} onClickFunction={renderItemsOnPage}>10</Button>
      <Button icon='angle right' customClass={`${CN}__angle-btn`} onClickFunction={renderNextPageSet}/>
    </div>
  );
};

export default PageSwitcher;
