import "../directory-item/directory-item.styles";
import { DirectoryItem } from "../directory-item/directory-item.component";
import "./directory.styles.scss";

export const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem category={category} />
      ))}
    </div>
  );
};
