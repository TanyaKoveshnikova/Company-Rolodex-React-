import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { company } = this.props;

    return (
      <div className="card-list">
        {company.map((companyItem) => {
          return <Card companyItem={companyItem} key={companyItem.id}/>;
        })}
      </div>
    );
  }
}

export default CardList;
