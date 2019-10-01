import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';

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
      selectedID: option.getAttribute(key),
    });
  }

  toggleDropdown(e) {
    const select = e.currentTarget;
    console.log(select.getAttribute('aria-expanded'));
    this.setState( {
      expanded: !this.state.expanded,
    });
  }

  render() {
    const iconName = `caret ${this.state.expanded ? 'up' : 'down'} icon`;

    return (
      <div className="dropdown"
        onClick={this.toggleDropdown}
        aria-expanded={this.state.expanded}
      >
        <span className="dropdown__selected">
          {this.state.options[this.state.selectedID].label}
        </span>
        <ul className="dropdown__items">
          {this.state.options.map((opt, i) => (
            <li
              className="dropdown__items__element"
              key={i.toString()}
              value={opt.value}
              onClick={this.selectOption}
            >
              {opt.label}
            </li>
          ))}
        </ul>
        <i className={iconName}></i>
      </div>
    );
  };
};

Dropdown.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.number,
};

export default Dropdown;
