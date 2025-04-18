import {LOGO_URL} from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { Grocery } from "./Grocery";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header =() =>{
  

  const {loggedInUser} = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const [log, setLog] = useState("Login");
  const [theme, setTheme] = useState("light");

  //subscribing to the store using selector
  const cartItem = useSelector((store)=>store.cart.items); //it tells what portion do I need to subscribe or need access to.
  console.log(cartItem);
    return (
    <div className="flex justify-between  bg-pink-100 shadow-md">
    <div className="flex items-center ml-2">
       <img className="h-20 " src ={LOGO_URL}/>
    </div>
    <div className="justify-between">
        <ul className = "flex m-4 p-2" >
          <li className="p-2">
            Online Status: {onlineStatus? "🟢":"🔴"}
          </li>
          <li className="p-2">
            <Link to="/">Home</Link>
          </li>   
          <li className="p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          
          
         
          {/* <button className="p-2" onClick = {()=>{
            theme=="light"?setTheme("dark"):setTheme("light");
          }}> */}
            {/* {theme}
          </button> */}
          <li className="p-2  font-bold text-xl relative" >
          <Link to="/Cart">
             <span className="text-2xl">🛒</span>
             <span className="absolute -top-1 -right-1 bg-pink-900 text-white text-xs px-1 rounded-full">
                {cartItem.length}
             </span>
          </Link>
          </li>
          <li className="font-bold p-2 ">{loggedInUser}</li>
          <li>
          <button className = "px-4 py-2 bg-pink-900 text-white rounded" onClick = { ()=>{
               log === "Login" ? setLog("Logout"): setLog("Login");
           }} >
            {log}
          </button>
          </li>
        </ul>
    </div>
    </div>
    
    );
};