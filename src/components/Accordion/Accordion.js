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
      // isHidden: !props.open,
      data: this.dataMapper(props.data || React.Children.toArray(props.children))
    };
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   // if(nextProps.open)
  //   const dataMapper = (array) => {
  //     const { open } = nextProps;

  //     return array.map((element) => ({ ...element, isHidden: !open }));
  //   };

  //   return { data: dataMapper(nextProps.data) };
  // }

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

  // clickHandler1() {
  //   const { isHidden } = this.state;

  //   this.setState({
  //     isHidden: !isHidden
  //   });
  // }

  render() {
    // console.log(React.Children.toArray(this.props.children));
    console.log('data', this.props.data);
    
    const { data } = this.state;
    const { heightItem, scroll, className } = this.props;

    const accordionItems = data.map(({
      id, title, description, isHidden
    }, index) => (
      <AccordionItem
        key={id || this.props.children}
        title={title || this.props.children.props.title}
        description={description || this.props.children}
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

//   render() {
//     let accordionItems;

//     const { heightItem, scroll, className } = this.props;
//     const { isHidden } = this.state;
//     const index = 1;
//     accordionItems = (
//       <AccordionItem
//         key={id}
//         title={this.props.children.props.title}
//         description={this.props.children}
//         onClick={() => this.clickHandler(index)}
//         hide={isHidden}
//         height={heightItem}
//         scroll={scroll}
//       />
//     );
//     const { data } = this.state;
//     accordionItems = data.map(({
//       id, title, description, isHidden
//     }, index) => (
//       <AccordionItem
//         key={id}
//         title={this.props.children.props.title}
//         description={description}
//         hide={isHidden}
//         onClick={() => this.clickHandler(index)}
//         height={heightItem}
//         scroll={scroll}
//       />
//     ));
//     return (
//       <div className={cx(CN, className)}>
//         {accordionItems}
//       </div>
//     );
//   }
// }

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
