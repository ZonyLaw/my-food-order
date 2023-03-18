import { useContext } from "react";
import { BagContext } from "../../context/bag.context";
import CheckoutItem from "../../components/checkout-item/checkoutItem.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { bagItems, bagTotalCost } = useContext(BagContext);

  return (
    <div className="checkout-container">
      <div className="checkout-headers">
        <div className="header-block">
          <span>Image</span>
        </div>
        <div className="header-block">
          <span>Restaurant</span>
        </div>
        <div className="header-block">
          <span>Dish</span>
        </div>
        <div className="header-block">
          <span>Quantity </span>
        </div>
        <div className="header-block">
          <span>Price </span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
        {bagItems.map((bagItem) => (
          <CheckoutItem key={bagItem.id} bagItem={bagItem} />
        ))}

        <span className="total">Total: £{bagTotalCost} </span>
      </div>
    </div>
  );
};

export default Checkout;
