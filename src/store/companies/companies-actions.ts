import {ICompany} from "../../interfaces/company";

export const filterCompanies = (state: any, action: any) => {
    const companyItems = state.companyItemsBase;
    state.companyItems = companyItems.filter((item: ICompany) => {
        return item.business_name.toLocaleLowerCase().includes(action.payload);
    });
};

export const getUniqueTypesCompanies = (state: any) => {
    const company = state.companyItemsBase;
    let arrayTypes = [];
    for (let i of company) {
        arrayTypes.push(i.type);
    }
    const uniqueSet = new Set(arrayTypes);
    state.uniqueCompanyTypes = [...uniqueSet];
}

export const filterOnTypes = (state: any, action: any) => {
    const companyItems = state.companyItemsBase;
    if (action.payload === '') {
        state.companyItems = companyItems
    } else {
        state.companyItems = companyItems.filter((item: ICompany) => {
            if (item?.type?.toLocaleLowerCase() === action.payload.toLocaleLowerCase()) {
                return item
            }
        });
    }
}