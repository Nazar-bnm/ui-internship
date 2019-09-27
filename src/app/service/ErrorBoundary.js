import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  componentDidCatch = (error) => {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  };

  render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;
    
    if (hasError) {
      return <div>{ errorMessage }</div>;
    } else {
      return children ;
    }
  }
}

export default ErrorBoundary;
