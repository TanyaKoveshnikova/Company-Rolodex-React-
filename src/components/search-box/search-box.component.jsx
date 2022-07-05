import "./search-box.styles.css";

const SearchBox = (props) => {
  const { onSearchHandler, placeholder, className } = props;

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
};

export default SearchBox;
