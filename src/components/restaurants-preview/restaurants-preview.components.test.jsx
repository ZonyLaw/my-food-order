import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RestaurantsPreview } from "./restaurants-preview.components";

const mockData = [
  {
    title: "chinese",
    item: [
      {
        id: 1,
        name: "Green Dragon",
        imageUrl:
          "https://res.cloudinary.com/dvveiqb1p/image/upload/v1675118929/myFoodOrder/Green-Dragon_w4w8xn.jpg",
        location: "E14",
        route: "restaurants/chinese/green-dragon",
      },
    ],
  },
];

describe("RestaurantsPreview", () => {
  it("renders a restaurant type", () => {
    render(<RestaurantsPreview restaurants={mockData} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("CHINESE")).toBeInTheDocument();
  });

  it("renders a restaurant", () => {
    render(<RestaurantsPreview restaurants={mockData} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText("Green Dragon")).toBeInTheDocument();
  });
});
