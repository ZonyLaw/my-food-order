import "./restaurant-card.styles.scss";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <img src={restaurant.imageUrl} alt={restaurant.name} />{" "}
      <h1> {restaurant.name} </h1>
    </div>
  );
};

export default RestaurantCard;
