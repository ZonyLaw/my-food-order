import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders header", () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Restaurants/i);
  expect(linkElement).toBeInTheDocument();
});
