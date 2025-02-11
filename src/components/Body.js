import {ResCard} from "./ResCard";
// import { resList } from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import { Shimmer_UI } from "./Shimmer_UI";





export const Body = () =>{
      const [ resList, setResList] = useState([]);

      const [searchText, setSearchText] = useState("");   
      const[filteredList2, setFilteredList2] = useState([]);   
      
      useEffect( ()=>{
         

         const fetchData = async () =>{
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.87960&lng=78.07620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();
          console.log(json);
          setResList(json?.data?.cards[1]?.card?.card.gridElements.infoWithStyle.restaurants);
          setFilteredList2(json?.data?.cards[1]?.card?.card.gridElements.infoWithStyle.restaurants);
      }

      fetchData();
      } , []);

      useEffect(() => {
        console.log("final data in resList: ", resList);
      }, [resList]);
      
      
        return resList.length === 0 ? (<Shimmer_UI/>) : (
           <div className="body">
          <div className="filter">
             <div className="search">
             
              <input className="search-input" 
              type="text" 
              value={searchText}
              onChange={ (e)=>{
               setSearchText(e.target.value);
              }} 
              />
              
              <button className="search-btn" onClick={()=>{
                    const filteredList2 = resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredList2(filteredList2);
                   }}>
                Search
               </button>
             
             </div>  
             
            <button className ="filter-btn" onClick = {()=>{
                  const filteredList = resList.filter((res)=>res.info.avgRating>4);
                  setFilteredList2(filteredList);
             }}>Top Rated Restaurants</button>
          </div>
          <div className="res-container">
           {  filteredList2.map((restaurants)=>(
                <ResCard key={ restaurants[0]?.info?.id } resData={restaurants}/>
           ))}
           
            
          
          
          
          
          </div>
          
          </div>
          
        );
};