import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Greeting from "./Greeting";

test("it renders Greeting", () => {
  render(<Greeting />);
});

test("query practice", () => {
  const { getAllByText } = render(<Greeting />);
  console.log(getAllByText("Hello", { exact: false }));
});

test("should toggle", () => {
  const { getByText, debug } = render(<Greeting />);
  debug();
  const heading = getByText("Hello,");
  expect(heading).toHaveClass("Greeting");
  expect(heading).toBeInTheDocument();
  fireEvent.click(getByText("Toggle"));
  expect(heading).not.toBeInTheDocument();
});
