import React from 'react';
import { Search as SearchIcon } from '@styled-icons/bootstrap/Search';

class SearchBar extends React.Component {
  state: {
    inputValue: string;
  } = {
    inputValue: '',
  };
  searchInput: React.RefObject<HTMLInputElement> = React.createRef();
  componentDidMount() {
    this.setState(() => ({
      inputValue: localStorage.getItem('searchInput'),
    }));
    this.searchInput.current && this.searchInput.current.focus();
  }
  componentWillUnmount() {
    if (this.state.inputValue) {
      localStorage.setItem('searchInput', this.state.inputValue);
    }
  }
  handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(() => ({
      inputValue: e.target.value,
    }));
  };
  render() {
    return (
      <div className="search-bar">
        <SearchIcon className="search-bar__icon" width={24} height={24} />
        <input
          className="search-bar__input"
          type="search"
          value={this.state.inputValue}
          onChange={this.handleChangeInputValue}
          ref={this.searchInput}
        />
      </div>
    );
  }
}

export default SearchBar;
