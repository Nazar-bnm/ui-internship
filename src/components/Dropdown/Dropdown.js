import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';
import cx from 'classnames';
export const CN = 'dropdown';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      selectedID: 0,
      options: props.options,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(e) {
    const option = e.target;
    this.setState({
      selectedID: option.getAttribute('selectednum'),
    });
  }

  toggleDropdown() {
    this.setState( {
      expanded: !this.state.expanded,
    });
  }

  renderMenuItems() {
    return this.state.options.map(({ value, label }, i) => (
      <li
        className={`${CN}__items__element`}
        key={value}
        selectednum={i}
        value={value}
        onClick={this.selectOption}
      >
        {label}
      </li>
    ));
  }

  render() {
    const iconName = `caret ${this.state.expanded ? 'up' : 'down'} icon`;
    const { expanded, selectedID } = this.state;

    return (
      <div className={cx(CN)}
        onClick={this.toggleDropdown}
        aria-expanded={expanded}
      >
        <span className={`${CN}__selected`}>
          {this.state.options[selectedID].label}
        </span>
        <ul className={`${CN}__items`}>
          {this.renderMenuItems()}
        </ul>
        <i className={iconName}></i>
      </div>
    );
  };
};

Dropdown.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.number,
  className: PropTypes.string,
};

export default Dropdown;
