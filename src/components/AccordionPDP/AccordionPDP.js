import React from 'react';

import Accordion from '^/Accordion';
import ContactDetails from '^/Footer/ContactDetails';
import { accordionItemsData } from './dataItems';

import './AccordionPDP.scss';

const CN = 'AccordionPDP';

const AccordionPDP = () => (
  <div className={CN}>
    <Accordion data={accordionItemsData} heightItem="100px" />
    <ContactDetails title="share" />
  </div>
);

export default AccordionPDP;
