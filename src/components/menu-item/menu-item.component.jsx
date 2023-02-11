import "./menu-item.styles.scss";

const MenuItem = ({ dish }) => {
  const { name, imageUrl, price } = dish;

  return (
    <div className="menu-card">
      <img src={imageUrl} alt={name} />

      <div className="menu-content">
        <h3>{name}</h3>
        <p>£{price.toFixed(1)}</p>
      </div>
      <div className="add-button">
        <p>Add</p>
      </div>
    </div>
  );
};

export default MenuItem;
