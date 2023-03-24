import React from "react";
import RestaurantCard from "../restaurant-card/restaurant-card.component";
import "./restaurants-preview.styles.scss";
import { Link } from "react-router-dom";

export const RestaurantsPreview = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((type) => (
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
