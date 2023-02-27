import "./bag-item.styles.scss";

const BagItem = ({ bagItem }) => {
  const { name, quantity, restaurant, price, imageUrl } = bagItem;
  return (
    <div className="dropdown-container">
      <h2> {restaurant}</h2>
      <div className="dropdown-content">
        <img src={imageUrl} alt={name} className="image" />
        <span>
          {name}, {quantity} X £{price.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default BagItem;
