import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import LoginRegister from '../LoginRegister';
import BillingInfo from '../BillingInfo';

const componentsEnum = {
  loginRegister: LoginRegister,
  billingInfo: BillingInfo
};
const CN = 'accordion';

class AccordionCheckout extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      data: this.dataMapper(props.data)
    };
  }

  updateData = (dataItem, updatedIsHidden) => ({ ...dataItem, isHidden: updatedIsHidden })

  dataMapper(array) {
    const { open } = this.props;

    return array.map((element) => ({ ...element, isHidden: !open }));
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
    const { heightItem, scroll } = this.props;
    const accordionItems = data.map(({
      isHidden, componentName
    }, index) => {
      const AccordionPart = componentsEnum[componentName];
      return (
        <AccordionPart
          hide={isHidden}
          onClick={() => this.clickHandler(index)}
          height={heightItem}
          scroll={scroll}
        />
      );
    });

    return (
      <div className={cx(CN)}>
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

AccordionCheckout.propTypes = {
  data: PropTypes.arrayOf(DataItemProps),
  showAll: PropTypes.bool,
  open: PropTypes.bool,
  scroll: PropTypes.bool,
  heightItem: PropTypes.string
  // className: PropTypes.string
};

AccordionCheckout.defaultProps = {
  data: {},
  showAll: false,
  open: false,
  scroll: false,
  heightItem: ''
  // className: ''
};

export default AccordionCheckout;
