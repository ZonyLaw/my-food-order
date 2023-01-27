import "./navigation.styles.scss";
import { ReactComponent as Chef } from "../../assets/chef.svg";

export const Navigation = () => {
  return (
    <div className="navbar">
      <Chef className="logo" />
      <div className="navbar">
        <p>Order</p>
        <p>Cart</p>
      </div>
    </div>
  );
};
