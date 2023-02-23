import "./bag-item.styles.scss";

const BagItem = ({ bagItem }) => {
  const { name, quantity, restaurant, price } = bagItem;
  return (
    <div>
      <h2> {restaurant}</h2>
      <span>
        {quantity} X {name} = {price * quantity}
      </span>
    </div>
  );
};

export default BagItem;
