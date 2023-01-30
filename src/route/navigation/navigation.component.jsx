import "./navigation.styles.scss";
import { ReactComponent as Chef } from "../../assets/chef.svg";
import { Outlet, Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <Chef />
        </Link>
        <div className="navLinksContainer">
          <Link className="navlinks" to="/restaurant">
            Restaurant
          </Link>
          <Link className="navlinks" to="/order">
            Order
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
