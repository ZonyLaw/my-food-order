import { RESTAURANTS_LIST } from "../../restaurants-list";
import { useParams } from "react-router-dom";
import RestaurantCard from "../restaurant-card/restaurant-card.component";
import "./category.styles.scss";

export const Category = () => {
  const { category } = useParams();

  return (
    <div>
      {RESTAURANTS_LIST.map((type) => {
        if (type.title === category) {
          return (
            <div key={type} className="category-container">
              {type.item.map((restaurant) => {
                return (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                );
              })}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
