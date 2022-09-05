import {Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch} from "./store/hooks";
import {setCompaniesInit} from "./store/companies/companies-slice";

import axios from "axios";

import Navigation from "./routes/navigation/navigation.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import CompanyDetail from "./components/company-detail/company-detail.component";

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
    "https://random-data-api.com/api/company/random_company?size=20";

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        axios.get(COMPANIES_URL)
            .then(companies => {
                const companyItems = companies.data;
                dispatch(setCompaniesInit(companyItems));
            })
    });

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={< CardList/>}/>
                    <Route path="/:id" element={<CompanyDetail/>}/>
                </Route>
            </Routes>
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
