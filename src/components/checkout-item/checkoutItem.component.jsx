import "./checkoutItem.styles.scss";
import { useContext } from "react";
import { BagContext } from "../../context/bag.context";

const CheckoutItem = ({ bagItem }) => {
  const { name, quantity, restaurant, price, imageUrl } = bagItem;
  const { removeItemInBag } = useContext(BagContext);

  const removeClickHandler = () => {
    removeItemInBag(bagItem);
  };

  return (
    <div className="checkoutitem-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} className="image-container" />
      </div>
      <h2>{restaurant}</h2>
      <span className="dish-content">{name}</span>
      <span>
        {quantity} x £{price.toFixed(1)}
      </span>
      <div onClick={removeClickHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
