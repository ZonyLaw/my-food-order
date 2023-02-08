import "./restaurant-card.styles.scss";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="rest-border">
      <div className="rest-container">
        <img src={restaurant.imageUrl} alt={restaurant.name} />
        <h2> {restaurant.name} </h2>
        <p>{restaurant.location}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
