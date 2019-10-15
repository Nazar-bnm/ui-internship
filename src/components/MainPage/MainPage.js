import React from 'react';
import Accordion from '../Accordion';
import { accordionItemsData } from '../../config/accordion';

const MainPage = () => (
  <Accordion data={accordionItemsData}/>
);

export default MainPage;
