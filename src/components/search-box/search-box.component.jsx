import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const { onSearchHandler, placeholder, className } = this.props;

    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onSearchHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
