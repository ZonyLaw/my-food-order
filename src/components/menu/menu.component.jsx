import { useParams } from "react-router-dom";
import { MENU_LIST } from "../../menu-list";
import MenuItem from "../menu-item/menu-item.component";

export const Menu = () => {
  const { menu } = useParams();

  return (
    <div>
      {MENU_LIST.map((menuContent) => {
        const { restaurant, foodmenu } = menuContent;

        if (restaurant.toLowerCase() === menu) {
          console.log(restaurant);
          return (
            <div key={restaurant}>
              <h1> {restaurant}</h1>

              {foodmenu.map((dish) => (
                <MenuItem dish={{ ...dish, restaurant: restaurant }} />
              ))}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
