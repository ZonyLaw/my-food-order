import { Routes, Route } from "react-router-dom";
import { Menu } from "../../components/menu/menu.component";
import { Category } from "../../components/category/category.component";

const RestType = () => {
  return (
    <Routes>
      <Route index element={<Category />} />
      <Route path=":menu" element={<Menu />} />
    </Routes>
  );
};

export default RestType;
