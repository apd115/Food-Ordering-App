import { render, screen } from "@testing-library/react";
import { Body } from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../MockData/MocksResList.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA),
    })
  );
test("Should render Body component",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>));
    
    const searchButton = screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();
    });

