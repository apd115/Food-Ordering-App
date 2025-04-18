import {ResCard} from "./ResCard";
// import { resList } from "../utils/mockData";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { Shimmer_UI } from "./Shimmer_UI";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";






export const Body = () =>{
      const [ resList, setResList] = useState([]);
     
      const [searchText, setSearchText] = useState("");   
      const[filteredList2, setFilteredList2] = useState([]);   

      const {setUserName, loggedInUser} = useContext(UserContext);
      
      useEffect( ()=>{
         

         const fetchData = async () =>{
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4121197&lng=77.048024&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

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

      
      
      const onlineStatus = useOnlineStatus();
      if( onlineStatus === false) return <h1>Hehe.....you're running out of data I think</h1>

        return resList.length === 0 ? (<Shimmer_UI/>) : (
           <div className="bg-pink-800">
         
             <div className="flex p-4">
             
              <input className="search-input border-black bg-pink-100" 
              type="text" 
              data-testid = "searchInput"
              value={searchText}
              onChange={ (e)=>{
               setSearchText(e.target.value);
              }} 
              />
              
              <button className="px-4 py-2 m-2 bg-pink-900 text-white rounded" onClick={()=>{
                    const filteredList2 = resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredList2(filteredList2);
                   }}>
                Search
               </button>
               <button className ="px-4 py-2 m-2 bg-pink-900  text-white rounded " onClick = {()=>{
                  const filteredList = resList.filter((res)=>res.info.avgRating>4);
                  setFilteredList2 (filteredList);
             }}>Top Rated Restaurants</button>
             <label className="px-4 py-2 m-2">LoggedInUser</label>
             <input 
             className="border-black px-4 py-2 m-2 " 
             value = {loggedInUser}
             onChange={(e)=>setUserName(e.target.value)}></input> 
             
             </div>  
             
            
          
          <div className="p-2 m-2 flex flex-wrap">
           {  filteredList2.map((restaurants)=>(
                <Link 
                key={ restaurants.info.id }
                to ={"/restaurants/" + restaurants.info.id}
                >
                
                <ResCard  resData={restaurants}/>
                </Link>
                
           ))}
           
            
          
          
          
          
          </div>
          
          </div>
          
        );
};