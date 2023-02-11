import { useParams } from "react-router-dom";

export const Menu = () => {
  const { menu } = useParams();
  console.log("in the menu");

  return (
    <div>
      <h1> {menu}</h1>
      <p>menu</p>
    </div>
  );
};
