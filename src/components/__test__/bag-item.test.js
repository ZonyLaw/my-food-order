import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import BagItem from "../bag-item/bag-item.component";

afterEach(() => {
  cleanup();
});

test("renders learn react link", () => {
  const bagitemMock = {
    name: "Ginger Fry beef",
    quantity: 2,
    restuarant: "Little Green",
    price: 22.4,
    imageUrl:
      "https://res.cloudinary.com/dvveiqb1p/image/upload/v1675369770/myFoodOrder/Bistros_hgdxhl.jpg",
  };
  const component = renderer.create(<BagItem bagItem={bagitemMock} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
