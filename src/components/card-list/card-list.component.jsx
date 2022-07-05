import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ company }) => (
  <div className="card-list">
    {company.map((companyItem) => {
      return <Card companyItem={companyItem} key={companyItem.id} />;
    })}
  </div>
);

export default CardList;
