import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AccordionItem from './AccordionItem';

const CN = 'accordion';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      hide: []
    };
  }

  componentDidMount() {
    const { data, open } = this.props;
    const hide = data.map(() => !open);

    this.setState({ hide });
  }

  clickHandler(index) {
    const { hide } = this.state;
    const { showAll } = this.props;
    let hideCopy = [...hide];

    hideCopy[index] = !hideCopy[index];

    if (!showAll) {
      hideCopy = hideCopy.map((el, indexOfEl) => (index === indexOfEl ? el : true),);
    }

    this.setState({ hide: hideCopy });
  }

  render() {
    const { hide } = this.state;
    const {
      data, heightItem, scroll, className
    } = this.props;

    const accordionItems = data.map(({ id, title, description }, index) => (
      <AccordionItem
        key={id}
        title={title}
        description={description}
        hide={hide[index]}
        onClick={() => this.clickHandler(index)}
        height={heightItem}
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

const DataItemProps = PropTypes.shape({
  title: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
});

Accordion.propTypes = {
  data: PropTypes.arrayOf(DataItemProps),
  showAll: PropTypes.bool,
  open: PropTypes.bool,
  scroll: PropTypes.bool,
  heightItem: PropTypes.string,
  className: PropTypes.string
};

Accordion.defaultProps = {
  data: {},
  showAll: false,
  open: false,
  scroll: false,
  heightItem: '',
  className: ''
};

export default Accordion;
