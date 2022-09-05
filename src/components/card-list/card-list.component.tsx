import {useAppSelector} from "../../store/hooks";
import Card from "../company-item/company-item.component";

import "./card-list.styles.css";
import {useState} from "react";
import CompanySort from "../company-sort/company-sort.component";
import CompanyFilter from "../company-filter/company-filter.component";

const CardList = () => {
    const companies = useAppSelector((state) => state.companies.companyItems)
    return (
        <div className="container-card-list">
            <div></div>
            <div>
                {companies.map((companyItem) => {
                    return <Card companyItem={companyItem} key={companyItem.id}/>;
                })}
            </div>
            <div className='change-fields'>
                <CompanySort />
                <CompanyFilter />
            </div>
        </div>
    )
}

export default CardList;
