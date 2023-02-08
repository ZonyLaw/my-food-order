import { RESTAURANTS_LIST } from "../../restaurants-list";
import RestaurantCard from "../restaurant-card/restaurant-card.component";
import "./restaurants-preview.styles.scss";

const RestaurantsPreview = () => {
  return (
    <div>
      {RESTAURANTS_LIST.map((type) => (
        <div>
          <h1>{type.title.toUpperCase()}</h1>
          <div className="category-container">
            {type.item.map((restuarant) => {
              return <RestaurantCard restaurant={restuarant} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantsPreview;
