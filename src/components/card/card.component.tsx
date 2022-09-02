import {Company} from "../../App";

import "./card.styles.scss";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../store/hooks";
import {setCompanyDetail} from "../../store/companies/companies-slice";

type CardProps = {
    companyItem: Company
}

const Card = ({companyItem}: CardProps) => {
    const {business_name, industry, type, logo, id} = companyItem;
    const dispatch = useAppDispatch();

    function onChooseCard() {
        dispatch(setCompanyDetail(companyItem))
    }

    return (
        <Link to={`/${id}`} className="card-container" onClick={onChooseCard}>
            <div className="card-logo">
                <img src={logo} alt={`company ${business_name}`}/>
            </div>
            <div className="card-information">
                <h2 className="card-name">
                    {business_name} "{business_name}"
                </h2>
                <p>{industry}</p>
                <p>{type}</p>
            </div>
        </Link>
    );
};

export default Card;
