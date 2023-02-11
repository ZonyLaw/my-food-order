import "../directory-item/directory-item.styles";
import { DirectoryItem } from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "Italian",
    imageUrl:
      "https://res.cloudinary.com/dvveiqb1p/image/upload/v1674765890/myFoodOrder/italian-food_v5jd0c.webp",
    route: "restaurants/italian",
  },

  {
    id: 2,
    title: "French",
    imageUrl:
      "https://res.cloudinary.com/dvveiqb1p/image/upload/v1674765890/myFoodOrder/French_nkyrfk.jpg",
    route: "restaurants/french",
  },
  {
    id: 3,
    title: "Chinese",
    imageUrl:
      "https://res.cloudinary.com/dvveiqb1p/image/upload/v1674765890/myFoodOrder/chinese_v93jb8.jpg",
    route: "restaurants/chinese",
  },
  {
    id: 4,
    title: "Japanese",
    imageUrl:
      "https://res.cloudinary.com/dvveiqb1p/image/upload/v1674765890/myFoodOrder/Japanese_v4crb9.jpg",
    route: "restaurants/japanese",
  },
];

export const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
