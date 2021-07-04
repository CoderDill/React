import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("should render", function () {
  render(<NewBoxForm />);
});

it("should match snapshot", function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
