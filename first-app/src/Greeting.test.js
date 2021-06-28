import { render, screen } from "@testing-library/react";
import App from "./App";
import Greeting from "./Greeting";

test("it renders Greeting", () => {
  render(<Greeting />);
});
