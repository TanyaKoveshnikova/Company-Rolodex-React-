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
        state.companyItems = filterCompaniesByFeature(companyItems, 'type', state.typesIsNull)
        getUniqueTypesCompanies(state, companyItems)
    } else if (state.industryIsNull !== 'null' && state.typesIsNull !== 'null') {
        const filterByType = filterCompaniesByFeature(companyItems, 'type', state.typesIsNull);
        state.companyItems = filterCompaniesByFeature(filterByType, 'industry', state.industryIsNull)
    } else {
        state.companyItems = filterCompaniesByFeature(companyItems, 'industry', action)
        getUniqueTypesCompanies(state, state.companyItems)
    }
}

export const filterByType = (state: any, action: any) => {
    const companyItems = state.companyItemsBase;
    if (action === 'null' && state.industryIsNull === 'null') {
        state.companyItems = companyItems
        getUniqueIndustryCompanies(state, state.companyItems)
    } else if (action === 'null') {
        state.companyItems = filterCompaniesByFeature(companyItems, 'industry', state.industryIsNull)
        getUniqueIndustryCompanies(state, companyItems)
    } else if (state.industryIsNull !== 'null' && state.typesIsNull !== 'null') {
        const filterByType = filterCompaniesByFeature(companyItems, 'type', state.typesIsNull);
        state.companyItems = filterCompaniesByFeature(filterByType, 'industry', state.industryIsNull)
    } else {
        state.companyItems = filterCompaniesByFeature(companyItems, 'type', action)
        getUniqueIndustryCompanies(state, state.companyItems)
    }
}

function filterCompaniesByFeature(arrayCompany: ICompany[], comparedElement: string, element: string): ICompany[] {
    return arrayCompany.filter((item: any) => {
        return (item[comparedElement].toLocaleLowerCase() === element.toLocaleLowerCase())
    });
}

