import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./route/home/home.component";
// import { Directory } from "./components/directory/directory.component";
import { Navigation } from "./route/navigation/navigation.component";
import Order from "./route/Order/order.component";

// const Restaurant = () => {
//   return <p>I am the restaurant list page</p>;
// };

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/Order/*" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
