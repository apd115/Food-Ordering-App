import { RES_LOGO_URL } from "../utils/constants";
// import { resList } from "../utils/mockData";



export const ResCard= (props) =>{
    const{ resData } = props;
    
    console.log("Data received from body to ReesCard:",resData.info);
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.info;
    return(
       
      <div className="m-2 p-2 w-[226px] flex flex-wrap hover:bg-pink-400 bg-pink-100 rounded-lg overflow-hidden text-clip" >
        {/* we can add the inline styling as above or we can do style{{backgroundColor:"#f0f0f0"}} first{} to insert a js code inside of jsx and second{} to insert js objcet i.e. style */}
       <img className="rounded-lg w-full h-40 object-cover" alt="res-logo" src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
       <div className="flex flex-col justify-between h-full mt-2">
       <h3 className="text-lg font-semibold truncate">{name}</h3>
       <p className="text-sm text-gray-600 truncate">{cuisines.join(",")}</p>
       <p className="text-sm text-green-600 font-medium">{avgRating}</p>
       <p className="text-sm text-green-600 font-medium">{deliveryTime}</p>       
       <p className="text-sm text-green-600 font-medium">{costForTwo}</p>
       </div>
       
       

      </div>
    );
};

