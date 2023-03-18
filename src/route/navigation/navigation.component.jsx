import "./navigation.styles.scss";
import { ReactComponent as Chef } from "../../assets/chef.svg";
import { Outlet, Link } from "react-router-dom";
import OrderIcon from "../../components/order-icon/order-icon.component";
import OrderDropdown from "../../components/order-dropdown/order-dropdown.component";
import { BagContext } from "../../context/bag.context";
import { useContext } from "react";

export const Navigation = () => {
  const { isBagOpen } = useContext(BagContext);

  return (
    <>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <Chef />
        </Link>
        <div className="navLinksContainer">
          <Link className="navlinks" to="/restaurants">
            Restaurants
          </Link>

          <OrderIcon />
        </div>
        {isBagOpen && <OrderDropdown />}
      </div>
      <Outlet />
    </>
  );
};
