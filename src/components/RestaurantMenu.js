
import {Shimmer_UI} from "./Shimmer_UI";
import { useParams } from "react-router-dom";
import  useRestaurantInfo  from "../utils/useRestaurantInfo.js";
import {imageURLPrefix} from "../utils/constants";
import { RestaurantCategory } from "./RestaurantCategory.js";
import { useState } from "react";


export const RestaurantMenu = () =>{
        
      // console.log("ResMenu is being rendered")
        const {resId} = useParams();
        
        const resInfo = useRestaurantInfo(resId); //custom hook -> always make into a separate file with same name as hook itself
        
        const [show, setShow] = useState(false);
        const [showIndex, setShowIndex] = useState(null);
        if (resInfo === null) return <Shimmer_UI/>
        

        
    console.log(resInfo);
    const {name, cuisines, avgRating, totalRatings, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {descriptionList} = resInfo?.cards[2]?.card?.card?.info?.aggregatedDiscountInfo;
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);
    
    return (
      <div >
        <div className="text-center">
        <h1 className="font-bold text-2xl my-5"> {name} </h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        <p>{avgRating}-{totalRatings/1000}k</p>
        <ul>{descriptionList.map((item, index)=><li key={index}>{item.meta}</li>)}</ul>
        </div>
        <div>
        {categories.map((category,index)=>
          (<RestaurantCategory 
            show={index === showIndex}
            setShowIndex={() => {
              // toggle logic
              setShowIndex(index === showIndex ? null : index);
            }}
            data={category?.card?.card}
          />)
          )}
        </div>
        
       
        
      </div>
    );
};

    
 
 
   
    
    
        