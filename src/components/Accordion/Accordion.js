/* eslint-disable no-invalid-this */

import React, { Component } from 'react';
import ContactDetails from '../Footer/ContactDetails';
import './Accordion.scss';
import AccordionItem from './AccordionItem';

const accordionItemsData = [
  {
    id: 1,
    title: 'description',
    description:
      ' Architecto, earum temporibus quidem ex eaque unde harum sit, deleniti tempore laboriosam neque cumque!',
  },
  {
    id: 2,
    title: 'additional info',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel sit possimus laborum error eius ',
  },
  {
    id: 3,
    title: 'tags',
    description: 'Earum temporibus quidem ex eaque unde harum sit, deleniti tempore laboriosam neque cumque!',
  },
];

const CN = 'accordion';

class Accordion extends Component {
  state = {
    hide: true,
    currentIndex: null,
  };

  clickHandler = (index) => {
    const { currentIndex } = this.state;
    index === currentIndex ?
      this.setState(({ hide }) => {
        return { hide: !hide };
      }) :
      this.setState({
        hide: false,
        currentIndex: index,
      });
  };
  render() {
    const { hide, currentIndex } = this.state;
    const accordionItems = accordionItemsData.map(({ id, title, description }, index) => (
      <AccordionItem
        key={id}
        title={title}
        description={description}
        hide={index !== currentIndex || (index === currentIndex && hide)}
        onClick={() => this.clickHandler(index)}
      />
    ));
    return (
      <div className={CN}>
        {accordionItems}
        <ContactDetails title="share" />
      </div>
    );
  }
}

export default Accordion;
