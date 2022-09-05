import {createSlice} from "@reduxjs/toolkit";

import {ICompany} from "../../interfaces/company";
import {
    filterByIndustry,
    filterByType,
    filterCompanies,
    getUniqueIndustryCompanies,
    getUniqueTypesCompanies
} from "./companies-actions";

interface CompaniesState {
    companyItemsBase: ICompany[],
    companyItems: ICompany[],
    companyDetail: ICompany | null,
    uniqueCompanyTypes: (string | undefined)[],
    uniqueCompanyIndustry: (string | undefined)[],
    typesIsNull: string ,
    industryIsNull: string
}

const initialState: CompaniesState = {
    companyItemsBase: [],
    companyItems: [],
    companyDetail: null,
    uniqueCompanyTypes: [],
    uniqueCompanyIndustry: [],
    typesIsNull: 'null',
    industryIsNull: 'null'
}

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setCompaniesInit(state, action) {
            state.companyItemsBase = action.payload;
            state.companyItems = action.payload;
            getUniqueTypesCompanies(state, state.companyItemsBase);
            getUniqueIndustryCompanies(state, state.companyItemsBase)
        },
        setCompanies(state, action) {
            state.companyItems = action.payload;
        },
        setCompanyDetail(state, action) {
            state.companyDetail = action.payload;
        },
        filterCompaniesTextBox(state, action) {
            filterCompanies(state, action)
        },
        filterCompaniesOnTypes(state, action) {
            state.typesIsNull = action.payload
            filterByType(state, action.payload)
        },
        filterCompaniesOnIndustry(state, action) {
            state.industryIsNull= action.payload
            filterByIndustry(state, action.payload)
        }
    }
})

export const {
    setCompanies,
    setCompanyDetail,
    setCompaniesInit,
    filterCompaniesTextBox,
    filterCompaniesOnTypes,
    filterCompaniesOnIndustry
} = companiesSlice.actions;
export default companiesSlice.reducer;

/*
* использую во всем выводах companyItems,
* а для выведения всего списка и фильтрации  companyItemsBase
* */