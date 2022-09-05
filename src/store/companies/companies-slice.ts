import {createSlice} from "@reduxjs/toolkit";

import {ICompany} from "../../interfaces/company";
import {filterCompanies, filterOnTypes, getUniqueTypesCompanies} from "./companies-actions";

interface CompaniesState {
    companyItemsBase: ICompany[],
    companyItems: ICompany[],
    companyDetail: ICompany | null,
    uniqueCompanyTypes: (string | undefined)[]
}

const initialState: CompaniesState = {
    companyItemsBase: [],
    companyItems: [],
    companyDetail: null,
    uniqueCompanyTypes: [],
}

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setCompaniesInit(state, action) {
            state.companyItemsBase = action.payload;
            state.companyItems = action.payload;
            getUniqueTypesCompanies(state)
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
            filterOnTypes(state, action)
        }
    }
})

export const {
    setCompanies,
    setCompanyDetail,
    setCompaniesInit,
    filterCompaniesTextBox,
    filterCompaniesOnTypes
} = companiesSlice.actions;
export default companiesSlice.reducer;

/*
* использую во всем выводах companyItems,
* а для выведения всего списка и фильтрации  companyItemsBase
* */