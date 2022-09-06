import {ChangeEventHandler} from "react";
import "./search-box.styles.scss";

interface ISearchBoxProps {
    className: string;
    placeholder?: string;
    onSearchHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = (props: ISearchBoxProps) => {
    const {onSearchHandler, placeholder, className} = props;

    return (
        <div className="input-name">
            <label htmlFor="name-company" className="title-change-field">Search by name: </label>
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
