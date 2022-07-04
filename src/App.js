import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      companyItems: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://random-data-api.com/api/company/random_company?size=10")
      .then((response) => response.json())
      .then((companyItems) =>
        this.setState(() => {
          return {
            companyItems,
          };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { companyItems, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredCompany = companyItems.filter((item) => {
      return item.business_name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Company Rolodex</h1>

        <SearchBox
          onSearchHandler={onSearchChange}
          placeholder="search"
          className="company-search-box"
        />
        <CardList company={filteredCompany} />
      </div>
    );
  }
}

export default App;
