import "./bag-item.styles.scss";

const BagItem = ({ bagItem }) => {
  const { name, quantity, restaurant } = bagItem;
  return (
    <div>
      <h2> {restaurant}</h2>
      <span>
        {quantity} X {name}
      </span>
    </div>
  );
};

export default BagItem;
