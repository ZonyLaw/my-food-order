import { RESTAURANTS_LIST } from "../../restaurants-list";
// import { useParams } from "react-router-dom";

export const Restaurant = () => {
  // console.log(RESTAURANTS_LIST);

  return (
    <div>
      {RESTAURANTS_LIST.map((type) => {
        if (type.title === "chinese") {
          return (
            <div>
              {type.item.map((restaurant) => {
                return (
                  <div>
                    <h1> {restaurant.name} </h1>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};
