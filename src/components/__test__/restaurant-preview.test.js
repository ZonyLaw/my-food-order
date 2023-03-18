import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { RESTAURANTS_LIST } from "../../restaurants-list";
import RestaurantsPreview from "../restaurants-preview/restaurants-preview.components";

afterEach(() => {
  cleanup();
});

test("renders learn react link", () => {
  const component = renderer.create(<RestaurantsPreview />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
