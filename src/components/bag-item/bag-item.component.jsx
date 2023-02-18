import "./bag-item.styles.scss";

const BagItem = ({ bagItem }) => {
  const { name, quantity } = bagItem;
  return (
    <div>
      <h2>{name} </h2>
      <span>quantity</span>
    </div>
  );
};

export default BagItem;
