import "./App.css";
import { useState, useEffect, ChangeEvent } from "react";
import { getData } from "./utils/data.utils";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// создание компонента через функцию( functional component )

export type Company = {
  id: number;
  uid: string;
  business_name: string;
  suffix?: string;
  industry?: string;
  catch_phrase?: string;
  buzzword?: string;
  bs_company_statement?: string;
  employee_identification_number?: string;
  duns_number?: string;
  logo?: string;
  type?: string;
  phone_number: string;
  full_address?: string;
  latitude?: number;
  longitude?: number;
};

const COMPANIES_URL =
  "https://random-data-api.com/api/company/random_company?size=15";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [companyItems, setCompanyItems] = useState<Company[]>([]);
  const [filteredCompany, setFilteredCompany] = useState(companyItems);

  useEffect(() => {
    const fetchCompanies = async () => {
      const companies = await getData<Company[]>(COMPANIES_URL);
      setCompanyItems(companies);
    };
    fetchCompanies();
  }, []);

  useEffect(() => {
    const newFilteredCompany = companyItems.filter((item) => {
      return item.business_name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCompany(newFilteredCompany);
  }, [companyItems, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Company Rolodex</h1>

      <SearchBox
        onSearchHandler={onSearchChange}
        placeholder="search"
        className="company-search-box"
      />
      <CardList companies={filteredCompany} />
    </div>
  );
};

// создание компонента через класс

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       companyItems: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://random-data-api.com/api/company/random_company?size=10")
//       .then((response) => response.json())
//       .then((companyItems) =>
//         this.setState(() => {
//           return {
//             companyItems,
//           };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { companyItems, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredCompany = companyItems.filter((item) => {
//       return item.business_name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Company Rolodex</h1>

//         <SearchBox
//           onSearchHandler={onSearchChange}
//           placeholder="search"
//           className="company-search-box"
//         />
//         <CardList company={filteredCompany} />
//       </div>
//     );
//   }
// }

export default App;
