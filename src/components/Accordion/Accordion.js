/* eslint-disable no-invalid-this */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactDetails from '../Footer/ContactDetails';
import './Accordion.scss';
import AccordionItem from './AccordionItem';

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
    const { data } = this.props;

    const accordionItems = data.map(({ id, title, description }, index) => (
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

Accordion.propTypes = {
  data: PropTypes.array,
};

Accordion.defaultProps = {
  data: {},
};

export default Accordion;
