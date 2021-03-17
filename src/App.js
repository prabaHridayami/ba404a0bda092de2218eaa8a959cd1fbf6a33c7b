import { useSelector } from "react-redux";

import "./styles/master-style.css";
import "./styles/lightbox.css";
import Header from "./components/header";
import Calendar from "./components/calendar";
import Time from "./components/time";
import FoodList from "./components/foodList";
import Cart from "./components/cart";

function App() {
  const totalPrice = useSelector((state) => state.totalPrice);
  const totalItem = useSelector((state) => state.totalItem);
  return (
    <div className="App">
      <Header />
      <Calendar />
      <Time />
      <FoodList />
      {totalItem > 0 && <Cart totalPrice={totalPrice} totalItem={totalItem} />}
    </div>
  );
}

export default App;
