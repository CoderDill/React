import { render, fireEvent } from "@testing-library/react";
import Item from "./Item";
import ShoppingList from "./ShoppingList";

it("should render", function () {
  render(<ShoppingList />);
});

it("should match snapshot", function () {
  const { asFragment } = render(<ShoppingList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new item", function () {
  const { queryByText, getByLabelText } = render(<ShoppingList />);
  const input = getByLabelText("Product");
  const btn = queryByText("Add Item");
  expect(queryByText("Product Name: Chocolate Milk")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "Chocolate Milk" } });
  fireEvent.click(btn);
  expect(queryByText("Product Name: Chocolate Milk")).toBeInTheDocument();
});
