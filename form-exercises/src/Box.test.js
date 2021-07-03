import { render } from "@testing-library/react";
import Box from "./Box";

it("should render", function () {
  render(<Box />);
});

it("should match snapshot", function () {
  const { asFragment } = render(<Box />)
  expect(asFragment()).toMatchSnapshot();
})
