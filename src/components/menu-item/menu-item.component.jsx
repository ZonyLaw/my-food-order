import "./menu-item.styles.scss";
import { useContext } from "react";
import { BagContext } from "../../context/bag.context";

const MenuItem = ({ dish }) => {
  const { addItemToBag } = useContext(BagContext);

  const { id, name, imageUrl, price } = dish;
  // const addHandleClick = () => {
  //   console.log("clicked");
  // };

  return (
    <div key={id} className="menu-card">
      <img src={imageUrl} alt={name} />

      <div className="menu-content">
        <h3>{name}</h3>
        <p>£{price.toFixed(1)}</p>
      </div>
      <div className="add-button">
        <button onClick={() => addItemToBag(dish)}>Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
