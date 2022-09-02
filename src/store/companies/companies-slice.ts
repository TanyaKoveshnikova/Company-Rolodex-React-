import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICompany} from "../../interfaces/company";

interface CompaniesState {
    companyItemsBase: ICompany[],
    companyItems: ICompany[],
    companyDetail: ICompany | null
}

const initialState: CompaniesState = {
    companyItemsBase: [],
    companyItems: [],
    companyDetail: null
}

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setCompanies(state, action) {
            state.companyItemsBase = action.payload;
            state.companyItems = action.payload;
        },
        setCompanyDetail(state, action) {
            state.companyDetail = action.payload;
        },
    }
})

export const {setCompanies, setCompanyDetail} = companiesSlice.actions;
export default companiesSlice.reducer;

/*
* использую во всем выводах companyItems,
* а для выведения всего списка и фильтрации  companyItemsBase
* */