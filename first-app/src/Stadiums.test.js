import React from "react";
import { render } from "@testing-library/react";
import Stadiums from "./Stadiums";
import NFLTeams from "./NFLTeams";

test("it matches snapshot", () => {
  const { asFragment } = render(<Stadiums NFLTeams={NFLTeams}/>);
  expect(asFragment()).toMatchSnapshot();
});
