import "./order-icon.styles.scss";
import { ReactComponent as FoodBagIcon } from "../../assets/food-bag.svg";
import { useContext } from "react";
import { BagContext } from "../../context/bag.context";

const OrderIcon = () => {
  const { isBagOpen, setIsBagOpen, bagTotalItems } = useContext(BagContext);

  const toggleIsBagOpen = () => {
    setIsBagOpen(!isBagOpen);
  };

  return (
    <div className="order-icon-container">
      <FoodBagIcon className="foodbag" onClick={toggleIsBagOpen} />
      <span className="item-count">{bagTotalItems}</span>
    </div>
  );
};
export default OrderIcon;
