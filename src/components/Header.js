import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

export const Header =() =>{
    
  const [log, setLog] = useState("Login");
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
               log === "Login" ? setLog("Logout"): setLog("Login");
           }} >
            {log}
          </button>
        </ul>
    </div>
    </div>
    
    );
};