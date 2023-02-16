import "./order-icon.styles.scss";
import { ReactComponent as FoodBagIcon } from "../../assets/food-bag.svg";

const OrderIcon = () => {
  return (
    <div className="order-icon-container">
      <FoodBagIcon className="foodbag" />
      <span className="item-count">0</span>
    </div>
  );
};
export default OrderIcon;
