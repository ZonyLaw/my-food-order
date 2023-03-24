import { Routes, Route } from "react-router-dom";
import { RestaurantsPreview } from "../../components/restaurants-preview/restaurants-preview.components";
import RestType from "../resttype/resttype.component";
import { RESTAURANTS_LIST } from "../../data/restaurants-list";

const Restaurants = () => {
  return (
    <Routes>
      <Route
        index
        element={<RestaurantsPreview restaurants={RESTAURANTS_LIST} />}
      />
      <Route path=":category/*" element={<RestType />}></Route>
    </Routes>
  );
};

export default Restaurants;
