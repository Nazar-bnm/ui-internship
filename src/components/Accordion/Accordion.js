import React, { Component } from 'react';
import './Accordion.scss';
import AccordionItem from './AccordionItem';

const ARROW_BUTTON_NAMES = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  DOWN: 'down',
};

const { DOWN } = ARROW_BUTTON_NAMES;

class Accordion extends Component {
  state = {
    isClicked: false,
  };

  clickHandler = () => {
    console.log('hello');
  }
  render() {
    const { isClicked } = this.state;
    return (
      <div>
        <AccordionItem type={DOWN} onClick={clickHandler} className={cx({ 'isClicked': isClicked })}/>
      </div>
    );
  }
}

export default Accordion;
