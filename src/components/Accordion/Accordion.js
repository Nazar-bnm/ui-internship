import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactDetails from '../Footer/ContactDetails';
import AccordionItem from './AccordionItem';
import './Accordion.scss';

const CN = 'accordion';

class Accordion extends Component {
  state = {
    hide: true,
    currentIndex: null,
  };

  clickHandler(index) {
    const { currentIndex } = this.state;

    index === currentIndex ?
      this.setState(({ hide }) => {
        return { hide: !hide };
      }) :
      this.setState({
        hide: false,
        currentIndex: index,
      });
  }

  render() {
    const { hide, currentIndex } = this.state;
    const { data } = this.props;

    const accordionItems = data.map(({ id, title, description }, index) => (
      <AccordionItem
        key={id}
        title={title}
        description={description}
        hide={index !== currentIndex || (index === currentIndex && hide)}
        onClick={this.clickHandler.bind(this, index)}
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.number]),
      title: PropTypes.string,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ),
};

Accordion.defaultProps = {
  data: {},
};

export default Accordion;
