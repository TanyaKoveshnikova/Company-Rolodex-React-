import {ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";

import {
    filterCompaniesOnIndustry,
    filterCompaniesOnTypes,
    filterCompaniesTextBox
} from "../../store/companies/companies-slice";
import SearchBox from "../search-box/search-box.component";
import SelectBox from "../select-box/select-box.component";
import './company-filter.styles.scss'

const CompanyFilter = () => {
    const typesCompanies = useAppSelector((state) => state.companies.uniqueCompanyTypes)
    const industryCompanies = useAppSelector((state) => state.companies.uniqueCompanyIndustry)
    const dispatch = useAppDispatch();
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        dispatch(filterCompaniesTextBox(searchFieldString))
    };

    const onSelectOptionsType = (event: ChangeEvent<HTMLInputElement>) => {
        const searchFieldString = event.target.value;
        dispatch(filterCompaniesOnTypes(searchFieldString))
    }

    const onSelectOptionsIndustry = (event: ChangeEvent<HTMLInputElement>) => {
        const searchFieldString = event.target.value;
        dispatch(filterCompaniesOnIndustry(searchFieldString))
    }

    return (
        <div>
            <SearchBox
                onSearchHandler={onSearchChange}
                className="company-search-box"
            />

            <SelectBox firstOptions='Choose type company' onSearchHandler={onSelectOptionsType} optionItems={typesCompanies}/>
            <SelectBox firstOptions='Choose industry company' onSearchHandler={onSelectOptionsIndustry} optionItems={industryCompanies}/>
        </div>
    )
}

export default CompanyFilter