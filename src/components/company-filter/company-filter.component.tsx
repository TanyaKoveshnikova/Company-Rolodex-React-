import {ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";

import SearchBox from "../search-box/search-box.component";
import {filterCompaniesOnTypes, filterCompaniesTextBox} from "../../store/companies/companies-slice";
import './company-filter.styles.scss'
import SelectBox from "../select-box/select-box.component";

const CompanyFilter = () => {
    const typesCompanies = useAppSelector((state) => state.companies.uniqueCompanyTypes)
    const dispatch = useAppDispatch();
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        dispatch(filterCompaniesTextBox(searchFieldString))
    };

    const onSelectOptions = (event: ChangeEvent<HTMLInputElement>) => {
        const searchFieldString = event.target.value;
        dispatch(filterCompaniesOnTypes(searchFieldString))
    }

    return (
        <div>
            <SearchBox
                onSearchHandler={onSearchChange}
                className="company-search-box"
            />

            <SelectBox firstOptions='Choose type company' onSearchHandler={onSelectOptions} optionItems={typesCompanies}/>
        </div>
    )
}

export default CompanyFilter