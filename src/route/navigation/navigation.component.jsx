import "./navigation.styles.scss";
import { ReactComponent as Chef } from "../../assets/chef.svg";
import { Outlet, Link } from "react-router-dom";
import OrderIcon from "../../components/order-icon/order-icon.component";

export const Navigation = () => {
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
          <Link className="navlinks" to="/order">
            <OrderIcon />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
