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
      data: this.dataMapper(props.data || React.Children.toArray(props.children))
    };
  }

  updateData = (dataItem, updatedIsHidden) => ({ ...dataItem, isHidden: updatedIsHidden })

  dataMapper(array) {
    const { open } = this.props;

    return array.map((element) => ({ isHidden: !open, ...element }));
  }

  clickHandler(index) {
    const { data } = this.state;
    const { showAll } = this.props;

    const updatedData = data.map((dataOfItem, indexOfItem) => {
      const { isHidden } = dataOfItem;

      if (index === indexOfItem) {
        return this.updateData(dataOfItem, !isHidden);
      }

      return showAll ? dataOfItem : this.updateData(dataOfItem, true);
    });

    this.setState({
      data: updatedData
    });
  }

  render() {
    const { data } = this.state;
    const {
      heightItem, scroll, className, children, childTitle
    } = this.props;

    const accordionItems = data.map(({
      id, title, description, isHidden
    }, index) => (
      <AccordionItem
        key={id || childTitle}
        title={title || childTitle}
        description={description || children}
        hide={isHidden}
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
  data: null,
  showAll: false,
  open: false,
  scroll: false,
  heightItem: '',
  className: ''
};

export default Accordion;
