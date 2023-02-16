import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./route/home/home.component";
// import { Directory } from "./components/directory/directory.component";
import { Navigation } from "./route/navigation/navigation.component";
import Order from "./route/order/order.component";
// import RestaurantsPreview from "./components/restaurants-preview/restaurants-preview.components";
import Restaurants from "./route/restaurants/restaurants.component";
import Checkout from "./route/checkout/checkout.component";

// const Restaurant = () => {
//   return <p>I am the restaurant list page</p>;
// };

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/order/*" element={<Order />} />
          <Route path="/restaurants/*" element={<Restaurants />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
