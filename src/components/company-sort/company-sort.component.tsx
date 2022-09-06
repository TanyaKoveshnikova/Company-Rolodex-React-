import {Fragment, useState} from "react";

import './company-sort.styles.scss'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setCompanies} from "../../store/companies/companies-slice";
import {ICompany} from "../../interfaces/company";

const CompanySort = () => {
    const companiesBase = useAppSelector((state) => state.companies.companyItemsBase);
    const dispatch = useAppDispatch();

    function handleChange(event: any) {
        const selectValue = event.target.value;
        const copyBaseCompanies = [...companiesBase];
        let sortCompanies: ICompany[];
        if (selectValue === '') {
            sortCompanies = copyBaseCompanies;
        } else {
            sortCompanies = getSortCompanies(selectValue, copyBaseCompanies)
        }
        dispatch(setCompanies(sortCompanies))
    }

    function getSortCompanies(selectValue: string, arraySort: ICompany[]): ICompany[] {
        const valueSort = selectValue.toString();
        return arraySort.sort(function (a: any, b: any) {
            let nameA = a[valueSort].toLowerCase(), nameB = b[valueSort].toLowerCase()
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        })
    }

    return (
        <Fragment>
            <div className="input-fields">
                <div className="title-change-field">Sort companies by:</div>
                <div className="select-boxItem">
                    <select className="custom-select-field" onChange={handleChange}>
                        <option value=""></option>
                        <option value='type'>type</option>
                        <option value='business_name'>business name</option>
                        <option value='industry'>industry</option>
                    </select>
                </div>
            </div>
        </Fragment>
    )
}

export default CompanySort;