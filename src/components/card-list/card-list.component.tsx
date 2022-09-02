import {useAppSelector} from "../../store/hooks";
import Card from "../card/card.component";

import "./card-list.styles.css";

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
        </div>
    )
}

export default CardList;
