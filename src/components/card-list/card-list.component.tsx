import { Company } from "../../App";
import Card from "../card/card.component";

import "./card-list.styles.css";

type CartListProps = {
  companies: Company[];
};

const CardList = ({  companies }: CartListProps) => (
  <div className="card-list">
    {companies.map((companyItem) => {
      return <Card companyItem={companyItem} key={companyItem.id} />;
    })}
  </div>
);

export default CardList;
