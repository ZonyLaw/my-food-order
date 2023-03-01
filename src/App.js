import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./route/home/home.component";
import { Navigation } from "./route/navigation/navigation.component";
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
          <Route path="/restaurants/*" element={<Restaurants />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
