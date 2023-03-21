import React from 'react';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error-page">
        <div className="error-page__box">
          <h2 className="error-page__title">404</h2>
          <p className="error-page__message">We can&apos;t find that page</p>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
