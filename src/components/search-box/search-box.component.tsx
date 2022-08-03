import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
  onSearchHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = (props: ISearchBoxProps) => {
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
