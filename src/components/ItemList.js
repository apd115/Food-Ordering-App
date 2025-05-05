import { imageURLPrefix } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { useState } from "react";

export const ItemList = ({items}) =>{
    
    const dispatch = useDispatch();

    const [clicked, setClicked] = useState(false);
    const [num, setNum] = useState(0);

    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }
    return(
       <div>
        {items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border-white border-b-2 text-left flex justify-between ">
            <div className="w-9/12">
            <div>
                <span>{item.card.info.name}</span>
                <span> -  ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                
            </div>
            
            <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 relative">
            
            <img src={imageURLPrefix + item.card.info.imageId} className="w-32 rounded-md "></img>
            
            <button className="absolute   -bottom-4  bg-black text-white p-1 rounded-lg mx-10" onClick={()=>
                {handleAddItem(item)
                 setClicked(true)
                 setNum(num+1)
                }}>{clicked?(num): ("Add +")}</button>
            </div>
            
            </div>
        ))}
        
       </div>
    );
}