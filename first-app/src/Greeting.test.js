import { render, screen } from "@testing-library/react";
import App from "./App";
import Greeting from "./Greeting";

test("it renders Greeting", () => {
  render(<Greeting />);
});

test("query practice", () => {
  const { getAllByText } = render(<Greeting />);
  console.log(getAllByText("Hello", { exact: false }));
});
