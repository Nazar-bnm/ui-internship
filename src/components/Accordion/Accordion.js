import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import AccordionItem from './AccordionItem';

const CN = 'accordion';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler1.bind(this);
    this.state = {
      // data: this.dataMapper(props.data),
      isHidden: !props.open
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

  // updateData = (dataItem, updatedIsHidden) => ({ ...dataItem, isHidden: updatedIsHidden })

  // dataMapper(array) {
  //   const { open } = this.props;

  //   return array.map((element) => ({ ...element, isHidden: !open }));
  // }

  // clickHandler(index) {
  //   const { data } = this.state;
  //   // console.log("data", data);

  //   const { showAll } = this.props;
  //   // console.log('showAll', showAll);


  //   const updatedData = data.map((dataOfItem, indexOfItem) => {
  //     // console.log('dataOfItem', dataOfItem);
  //     // console.log('indexOfItem', indexOfItem);

  //     const { isHidden } = dataOfItem;
  //     // console.log('isHidden', isHidden);

  //     if (index === indexOfItem) {
  //       return this.updateData(dataOfItem, !isHidden);
  //     }

  //     return showAll ? dataOfItem : this.updateData(dataOfItem, true);
  //   });

  //   this.setState({
  //     data: updatedData
  //   });
  // }

  clickHandler1() {
    const { isHidden } = this.state;

    this.setState({
      isHidden: !isHidden
    });
  }

  render() {
    let accordionItems;
    // console.log(this.props);
    
    const { heightItem, scroll, className } = this.props;
    // console.log('heightItem', this.props.children);
    const { isHidden } = this.state;
    // console.log('child', this.props.children.props.children[0].props.children);
    console.log('child', this.props.children.props.title);

    if (this.props.children) {
      // const index = 0;
      // console.log('blaaaaaaa');


      accordionItems = (
        <AccordionItem
          key={this.props.children}
          title={this.props.children.props.title}
          description={this.props.children}
          onClick={() => this.clickHandler1()}
          hide={isHidden}
          height={heightItem}
          scroll={scroll}
        />
      );
    } else {
      const { data } = this.state;

      accordionItems = data.map(({
        id, title, description, isHidden
      }, index) => (
        <AccordionItem
          key={id}
          title={title}
          description={description}
          hide={isHidden}
          onClick={() => this.clickHandler(index)}
          height={heightItem}
          scroll={scroll}
        />
      ));
    }


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
  // data: PropTypes.arrayOf(DataItemProps),
  showAll: PropTypes.bool,
  open: PropTypes.bool,
  scroll: PropTypes.bool,
  heightItem: PropTypes.string,
  className: PropTypes.string
};

Accordion.defaultProps = {
  // data: {},
  showAll: false,
  open: false,
  scroll: false,
  heightItem: '',
  className: ''
};

export default Accordion;
