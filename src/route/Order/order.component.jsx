import { Routes, Route } from "react-router-dom";
import { Category } from "../../components/category/category.component";

const Order = () => {
  return (
    <Routes>
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Order;
