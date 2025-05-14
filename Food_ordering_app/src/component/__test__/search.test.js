import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import mockData from "../../Mocks/resDataList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockData);
    },
  });
});
it("Should test Search Functionality", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardBeforesearch = screen.getAllByTestId("cards");
  expect(cardBeforesearch.length).toBe(20); 

  const searchbtn = screen.getByRole("button", { name: "Search" });

  const searchbox = screen.getByTestId("searchbox");
  expect(searchbtn).toBeInTheDocument();
  fireEvent.change(searchbox, { target: { value: "pizza" } });
  fireEvent.click(searchbtn);

  const cardAfterSearch = screen.getAllByTestId("cards");
  expect(cardAfterSearch.length).toBe(2);
});


it("Should test Sort by Rating Functionality", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardBeforeSort = screen.getAllByTestId("cards");
    expect(cardBeforeSort.length).toBe(20); 
  
    const sortByRatingBtn = screen.getByRole("button", { name: "Sort by Rating" });
    fireEvent.click(sortByRatingBtn);
    expect(sortByRatingBtn).toBeInTheDocument();
  
    const cardAfterSearch = screen.getAllByTestId("cards");
    // Dynamically calculate the expected count based on mock data
    // Adjust filter logic as per your sorting criteria
    expect(cardAfterSearch.length).toBe(11);
  });

