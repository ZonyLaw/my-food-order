import "./direcotry-item.styles.scss";

export const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="order-box ">
        <h2>{title}</h2>
        <p>Order now</p>
      </div>
    </div>
  );
};
