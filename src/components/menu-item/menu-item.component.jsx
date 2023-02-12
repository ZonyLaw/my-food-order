import "./menu-item.styles.scss";

const MenuItem = ({ dish }) => {
  const { id, name, imageUrl, price } = dish;
  const addHandleClick = () => {
    console.log("clicked");
  };

  return (
    <div key={id} className="menu-card">
      <img src={imageUrl} alt={name} />

      <div className="menu-content">
        <h3>{name}</h3>
        <p>£{price.toFixed(1)}</p>
      </div>
      <div className="add-button">
        <button onClick={addHandleClick}>Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
