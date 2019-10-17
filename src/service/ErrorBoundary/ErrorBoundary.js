import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: ''
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  }

  render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <div>{ errorMessage }</div>;
    }
    return children;
  }
}


ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired
};

export default ErrorBoundary;
