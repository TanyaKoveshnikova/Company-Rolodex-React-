import {ICompany} from "../../interfaces/company";

export const filterCompanies = (state: any, action: any) => {
    filterByIndustry(state, state.industryIsNull)
    filterByType(state, state.typesIsNull)
    const companyItems = state.companyItems;
    state.companyItems = companyItems.filter((item: ICompany) => {
        return item.business_name.toLocaleLowerCase().includes(action.payload);
    });
};

export const getUniqueTypesCompanies = (state: any, array: any[]) => {
    let arrayTypes = [];
    for (let i of array) {
        arrayTypes.push(i.type);
    }
    const uniqueSet = new Set(arrayTypes);
    state.uniqueCompanyTypes = [...uniqueSet];
}

export const getUniqueIndustryCompanies = (state: any, array: any[]) => {
    let arrayIndustry = [];
    for (let i of array) {
        arrayIndustry.push(i.industry);
    }
    const uniqueSet = new Set(arrayIndustry);
    state.uniqueCompanyIndustry = [...uniqueSet];
}

export const filterByIndustry = (state: any, action: any) => {
    const companyItems = state.companyItemsBase;
    if (action === 'null' && state.typesIsNull === 'null') {
        state.companyItems = companyItems
        getUniqueTypesCompanies(state, state.companyItems)
    } else if (action === 'null') {
        state.companyItems = companyItems.filter((item: any) => {
            return (item?.type.toLocaleLowerCase() === state.typesIsNull.toLocaleLowerCase())
        });
        getUniqueTypesCompanies(state, companyItems)

    } else if (state.industryIsNull !== 'null' && state.typesIsNull !== 'null') {
        state.companyItems = companyItems.filter((item: any) => {
            return (state.typesIsNull.toLocaleLowerCase() === item.type.toLocaleLowerCase() && state.industryIsNull.toLocaleLowerCase() === item.industry.toLocaleLowerCase())
        });
    } else {
        state.companyItems = companyItems.filter((item: any) => {
            return (item?.industry.toLocaleLowerCase() === action.toLocaleLowerCase())
        });

        getUniqueTypesCompanies(state, state.companyItems)
    }
}

export const filterByType = (state: any, action: any) => {
    const companyItems = state.companyItemsBase;
    if (action === 'null' && state.industryIsNull === 'null') {
        state.companyItems = companyItems
        getUniqueIndustryCompanies(state, state.companyItems)

    } else if (action === 'null') {
        state.companyItems = companyItems.filter((item: any) => {
            return (item?.industry.toLocaleLowerCase() === state.industryIsNull.toLocaleLowerCase())
        });

        getUniqueIndustryCompanies(state, companyItems)
    } else if (state.industryIsNull !== 'null' && state.typesIsNull !== 'null') {
        state.companyItems = companyItems.filter((item: any) => {
            return (state.typesIsNull.toLocaleLowerCase() === item.type.toLocaleLowerCase() && state.industryIsNull.toLocaleLowerCase() === item.industry.toLocaleLowerCase())
        });
    } else {
        state.companyItems = companyItems.filter((item: any) => {
            return (item?.type.toLocaleLowerCase() === action.toLocaleLowerCase())
        });

        getUniqueIndustryCompanies(state, state.companyItems)
    }
}

