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
      <div className="image-container flex-item">
        <img src={imageUrl} alt={name} className="image-container" />
      </div>
      <div className="flex-item">
        <h2>{restaurant}</h2>
      </div>
      <div className="flex-item">
        <span className="dish-content">{name}</span>
      </div>
      <div className="flex-item">
        <div className="arrow flex-item" onClick={minusItemHandler}>
          &#10094;
        </div>
        <div className="flex-item">
          <span>{quantity}</span>
        </div>
        <div className="arrow flex-item" onClick={addItemHandler}>
          &#10095;
        </div>
      </div>
      <div className="flex-item">
        <span>£{price.toFixed(1)}</span>
      </div>
      <div className="flex-item" onClick={removeClickHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
