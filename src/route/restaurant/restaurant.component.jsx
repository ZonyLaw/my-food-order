import { RESTAURANTS_LIST } from "../../restaurants-list";
// import { useParams } from "react-router-dom";

export const Restaurant = () => {
  // console.log(RESTAURANTS_LIST);

  return (
    <div>
      {RESTAURANTS_LIST
        .map((x) => {
          if (x.title === "chinese") {
            x.item.map((y) =>  <h1> {y.name} </h1>);
            }
          )};
      }
    </div>
  );
};
