import React, { Component } from 'react';

import config from '../../../../config';
import CheckBoxListContainer from '../CheckBoxList/CheckBoxListContainer';
import Accordion from '../../Accordion';

import './Filters.scss';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { category } = this.props;
    const gender = config[category];
    const tabletBreakpoint = 800;
    const { width } = this.state;
    const renderAccordion = (categoryName, index) => {
      const open = index === 0 && width <= tabletBreakpoint;

      return (
        <Accordion
          key={categoryName}
          heightItem="auto"
          open={open}
          data={[{
            title: categoryName,
            id: categoryName,
            description: <CheckBoxListContainer
              itemsList={gender[categoryName]}
              category={categoryName}
            />
          }]}
        />
      );
    };

    return (
      <div>
        {Object.keys(gender).map(renderAccordion)}
      </div>
    );
  }
}

export default Filters;
