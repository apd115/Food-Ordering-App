import MOCK_DATA from "../MockData/Mocks.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ResCard } from "../ResCard";

test("should render card data properly", ()=>{
   render(<ResCard resData={MOCK_DATA}/>);
   

   const restaurant = screen.getByText("Burger King");

   expect(restaurant).toBeInTheDocument();

});