import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", async () => {
  render(<BubblePage />);

  const bubbleColorObjsList = await screen.findByTestId(/listofColorObjs/i);
  expect(bubbleColorObjsList).not.toBeNull();

  //Should have 10 colors
  // const bubbleColorBoxes = await screen.queryAllByTestId(/ColorBoxes/i);
  // expect(bubbleColorBoxes).toHaveLength(10);
});
