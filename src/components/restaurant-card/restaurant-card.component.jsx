import "./restaurant-card.styles.scss";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant, type }) => {
  const { name, location, imageUrl } = restaurant;

  return (
    <Link
      to={
        window.location.pathname.length <= 12
          ? `${type}/${name.toLowerCase()}`
          : name.toLowerCase()
      }
      className="link-color"
    >
      <div className="rest-container">
        <div className="rest-content">
          <img src={imageUrl} alt={restaurant.name} />
          <h2> {name} </h2>
          <p>{location}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
