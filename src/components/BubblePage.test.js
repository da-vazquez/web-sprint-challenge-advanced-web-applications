import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBubbles as mockFetchBubbles } from '../api/fetchBubbles';

jest.mock('../api/fetchBubbles')

const testData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
]

test("Renders BubblePage without errors", async () => {
  mockFetchBubbles.mockResolvedValueOnce({testData})
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockFetchBubbles.mockResolvedValueOnce({testData})
  render(<BubblePage />)

  const bubbles = screen.getAllByText(/bubbles/i)

  expect(await bubbles).toBeTruthy()

  //const sanityCheck = screen.getAllByText(/testing/i)

  //expect(await sanityCheck).toBeInTheDocument()

  
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading