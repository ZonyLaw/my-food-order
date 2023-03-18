import { useContext } from "react";
import "./order-dropdown.styles.scss";
import BagItem from "../bag-item/bag-item.component";
import { BagContext } from "../../context/bag.context";
import { useNavigate } from "react-router-dom";

const OrderDropdown = () => {
  const { bagItems } = useContext(BagContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="order-dropdown-container">
      <div className="order-items">
        {bagItems.map((item) => (
          <BagItem key={item.id} bagItem={item} />
        ))}
      </div>
      <button onClick={goToCheckoutHandler}>Checkout</button>
    </div>
  );
};

export default OrderDropdown;
