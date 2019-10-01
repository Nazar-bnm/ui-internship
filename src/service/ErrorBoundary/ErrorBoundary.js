import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  componentDidCatch = (error) => {
    setState({
      hasError: true,
      errorMessage: error,
    });
  };

  render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <div>{ errorMessage }</div>;
    } else {
      return children;
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
};

export default ErrorBoundary;
