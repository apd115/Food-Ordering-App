import {ResCard} from "./ResCard";
// import { resList } from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";





export const Body = () =>{
      const [ resList, setResList] = useState([]);
      
      
      useEffect( ()=>{
         fetchData();
      } , []);

      const fetchData = async () =>{
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.87960&lng=78.07620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();
          console.log(json);
          setResList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      }
        return resList === 0 ? <Shimmer_UI/> : (
           <div className="body">
          <div className="search">
                <button className ="btn" onClick = {()=>{
                  const filteredList = resList.filter((res)=>res.info.avgRating>4);
                  setResList(filteredList);
                }}>Top Rated Restaurants</button>
          </div>
          <div className="res-container">
           {  resList.map((restaurants)=>(
                <ResCard key={ restaurants?.info?.id } resData={restaurants}/>
           ))}
           
            
          
          
          
          
          </div>
          
          </div>
          
        );
};