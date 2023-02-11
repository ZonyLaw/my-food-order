import { Routes, Route } from "react-router-dom";
// import { Category } from "../../components/category/category.component";
import RestaurantsPreview from "../../components/restaurants-preview/restaurants-preview.components";
// import { Menu } from "../../components/menu/menu.component";
import RestType from "../resttype/resttype.component";

const Restaurants = () => {
  return (
    <Routes>
      <Route index element={<RestaurantsPreview />} />
      <Route path=":category/*" element={<RestType />}></Route>
    </Routes>
  );
};

export default Restaurants;
