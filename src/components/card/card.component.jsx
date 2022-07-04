import { Component } from "react";

import "./card.styles.scss";

class Card extends Component {
  render() {
    const { id, business_name, industry, type, logo } = this.props.companyItem;
    return (
      <div className="card-conteiner">
        <div className="card-logo">
          <img src={logo} alt={`company ${business_name}`} />
        </div>
        <div className="card-information">
          <h2 className="card-name">
            {business_name} "{business_name}"
          </h2>
          <p>{industry}</p>
          <p>{type}</p>
        </div>
      </div>
    );
  }
}

export default Card;
