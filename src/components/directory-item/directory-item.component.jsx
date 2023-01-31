import "./direcotry-item.styles.scss";
import { useNavigate } from "react-router-dom";

export const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandlers = () => navigate(route);

  return (
    <div className="directory-item-container" onClick={onNavigateHandlers}>
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
