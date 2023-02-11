import { RESTAURANTS_LIST } from "../../restaurants-list";
import RestaurantCard from "../restaurant-card/restaurant-card.component";
import "./restaurants-preview.styles.scss";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const RestaurantsPreview = () => {
  // const { title, item } = RESTAURANTS_LIST;
  // const navigate = useNavigate();
  // const onNavigateHandlers = () => {
  //   navigate(route);
  // };

  return (
    <div>
      {RESTAURANTS_LIST.map((type) => (
        <div key={type.title}>
          <Link to={type.title} className="type-link">
            <h1>
              <span>{type.title.toUpperCase()}</span>
            </h1>
          </Link>

          <div className="category-container">
            {type.item.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  type={type.title}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantsPreview;
