import "./card.styles.scss";

const Card = ({ companyItem }) => {
  const { business_name, industry, type, logo } = companyItem;
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
};

export default Card;
