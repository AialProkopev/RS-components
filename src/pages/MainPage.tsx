import React from 'react';
import SearchBar from '../components/SearchBar';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <SearchBar />
        <div className="main-page__cards">Some cards</div>
      </div>
    );
  }
}

export default MainPage;
