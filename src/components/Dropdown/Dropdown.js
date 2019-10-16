import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './Dropdown.scss';

export const CN = 'dropdown';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      selectedID: 0,
      options: props.options
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(e) {
    const option = e.target;
    this.setState({
      selectedID: option.getAttribute('selectednum')
    });
  }

  toggleDropdown() {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded
    });
  }

  renderMenuItems() {
    const { options } = this.state;

    return options.map(({ value, label }, i) => (
      <div
        className={`${CN}__items__element`}
        key={value}
        selectednum={i}
        value={value}
        onClick={this.selectOption}
      >
        {label}
      </div>
    ));
  }

  render() {
    const { expanded, selectedID, options } = this.state;
    const iconName = `caret ${expanded ? 'up' : 'down'} icon`;

    return (
      <div
        className={cx(CN)}
        onClick={this.toggleDropdown}
        aria-expanded={expanded}
      >
        <span className={`${CN}__selected`}>
          {options[selectedID].label}
        </span>
        <ul className={`${CN}__items`}>
          {this.renderMenuItems()}
        </ul>
        <i className={iconName} />
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired
};

export default Dropdown;
