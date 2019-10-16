import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AccordionItem from './AccordionItem';
import './Accordion.scss';

const CN = 'accordion';

class Accordion extends Component {
  state = {
    hide: [],
    currentIndex: null,
  };

  componentDidMount() {
    const { data, open } = this.props;
    const hide = data.map((el) => !open);
    this.setState({ hide: hide });
  }

  clickHandler(index) {
    const { hide } = this.state;
    const { showAll } = this.props;
    let hideCopy = [...hide];

    hideCopy[index] = !hideCopy[index];

    if (!showAll) {
      hideCopy = hideCopy.map((el, currentIndex) =>
        index === currentIndex ? el : true,
      );
    }

    this.setState({ hide: hideCopy, currentIndex: index });
  }

  render() {
    const { hide } = this.state;
    const { data, heightItem, scroll, className } = this.props;

    const accordionItems = data.map(({ id, title, description }, index) => (
      <AccordionItem
        key={id}
        title={title}
        description={description}
        hide={hide[index]}
        onClick={this.clickHandler.bind(this, index)}
        height = {heightItem}
        scroll={scroll}
      />
    ));

    return (
      <div className={cx(CN, className)}>
        {accordionItems}
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
  showAll: PropTypes.bool,
  open: PropTypes.bool,
  scroll: PropTypes.bool,
  heightItem: PropTypes.string,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  data: {},
  showAll: false,
  open: false,
  scroll: false,
  heightItem: '',
  className: '',
};

export default Accordion;
