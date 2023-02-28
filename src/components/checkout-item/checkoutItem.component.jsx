import "./checkoutItem.styles.scss";
import { useContext } from "react";
import { BagContext } from "../../context/bag.context";

const CheckoutItem = ({ bagItem }) => {
  const { name, quantity, restaurant, price, imageUrl } = bagItem;
  const { removeItemInBag, addItemToBag, minusItemToBag } =
    useContext(BagContext);

  const removeClickHandler = () => {
    removeItemInBag(bagItem);
  };

  const addItemHandler = () => {
    addItemToBag(bagItem);
  };

  const minusItemHandler = () => {
    minusItemToBag(bagItem);
  };

  return (
    <div className="checkoutitem-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} className="image-container" />
      </div>
      <h2>{restaurant}</h2>
      <span className="dish-content">{name}</span>
      <div className="arrow" onClick={minusItemHandler}>
        &#10094;
      </div>
      <span>{quantity}</span>
      <div className="arrow" onClick={addItemHandler}>
        &#10095;
      </div>

      <span>£{price.toFixed(1)}</span>
      <div onClick={removeClickHandler}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
