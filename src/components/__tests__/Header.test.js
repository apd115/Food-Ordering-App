import { BrowserRouter } from "react-router-dom";
import { AppStore } from "../../utils/AppStore";
import { Provider } from "react-redux";
import { Header } from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


it("should render header component with a login button", ()=>{
    render(<BrowserRouter>
           <Provider store={AppStore}>
            <Header/>
           </Provider>
           </BrowserRouter>);
    
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});

it("should render header with logout ad login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
            <Header/>
        </Provider>
        </BrowserRouter>);
    
    const loginButton = screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
});

        
       
    
