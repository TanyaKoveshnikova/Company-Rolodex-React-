import {useAppSelector} from "../../store/hooks";

import './company-detail.styles.scss'

const CompanyDetail = () => {
    const companyItem = useAppSelector((state) => state.companies.companyDetail)

    return (
        <div className="companyItem">
            <div className="element">
                <img className="imageCompanyItem" src={companyItem?.logo} alt="rr"/>
            </div>
            <div className="element">
                <div className="item">
                    <strong>name:</strong> {companyItem?.suffix} "{companyItem?.business_name}"
                </div>
                <div className="item">
                    <strong>industry</strong>: {companyItem?.industry}
                </div>
                <div className="item">
                    <strong>catch phrase</strong>: {companyItem?.catch_phrase}
                </div>
                <div className="item">
                    <strong>phone number</strong>: {companyItem?.phone_number}
                </div>
                <div className="item">
                    <strong>full address</strong>: {companyItem?.full_address}
                </div>
            </div>
        </div>
    )
}

export default CompanyDetail;