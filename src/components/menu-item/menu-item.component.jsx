const MenuItem = ({ dish }) => {
  const { name, imageUrl, price } = dish;
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;
