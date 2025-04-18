import { ItemList } from "./ItemList";
import { useState } from "react";

export const RestaurantCategory = ({data, show, setShowIndex}) =>{

    
    //it takes the track of clicking action from here and pass it to the parent component so that setShowIndex can 
    //be changed accordingly.
    const handleClick = () =>{
        
        setShowIndex();
        
    }
    
    return(
        <div >
        <div className="w-6/12 bg-pink-100 shadow-lg mx-auto my-4 cursor-pointer" >
            <div > 
            <span className=" font-bold text-md m-1 p-1" onClick={handleClick}>{data.title}({data.itemCards.length})</span>
            <span className=" m-1 p-1">🔻</span>
            </div>
            {show && <ItemList items={data.itemCards}/>}
            
        </div>
        </div>
    );
}