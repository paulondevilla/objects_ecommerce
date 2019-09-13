import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-image-container">
          <div className="error-image" />
          <h2 className="error-text">This page is broken.</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
