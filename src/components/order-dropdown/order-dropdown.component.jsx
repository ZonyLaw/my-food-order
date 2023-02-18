import { useContext } from "react";
import "./order-dropdown.styles.scss";
import BagItem from "../bag-item/bag-item.component";
import { BagContext } from "../../context/bag.context";

const OrderDropdown = () => {
  const { bagItems } = useContext(BagContext);

  return (
    <div className="order-dropdown-container">
      <div className="order-items">
        {bagItems.map((item) => (
          <BagItem key={item.id} bagItem={item} />
        ))}
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default OrderDropdown;
