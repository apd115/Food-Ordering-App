import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

export const Header =() =>{
    
  const [login, setLogin] = useState("Login");
    return (
    <div className="Header">
    <div className="logo">
       <img className="imgLogo" src ={LOGO_URL}/>
    </div>
    <div className="navbar">
        <ul>
          <li>Home</li>   
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className = "login-btn" onClick = { ()=>{
              setLogin("Logout");
           }} >
            Login
          </button>
        </ul>
    </div>
    </div>
    
    );
};