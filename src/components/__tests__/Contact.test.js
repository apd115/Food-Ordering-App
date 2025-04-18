import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";

describe("Test cases of Contact", ()=>{
    test("Contact page should load", ()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    
    });
    
    // test("Button should be rendered", ()=>{
    //     render(<Contact/>);
    //     const button = screen.getByRole("button");
    //     expect(button).toBeInTheDocument();
    // });

});

