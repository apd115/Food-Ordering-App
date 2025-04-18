import { RES_LOGO_URL } from "../utils/constants";
// import { resList } from "../utils/mockData";



export const ResCard= (props) =>{
    const{ resData } = props;
    
    console.log("Data received from body to ReesCard:",resData.info);
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.info;
    return(
       
      <div className="m-2 p-2 w-[226px] flex flex-wrap hover:bg-pink-400 bg-pink-100 rounded-lg overflow-hidden text-clip" >
        {/* we can add the inline styling as above or we can do style{{backgroundColor:"#f0f0f0"}} first{} to insert a js code inside of jsx and second{} to insert js objcet i.e. style */}
       <img className="rounded-lg " alt="res-logo" src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
       <h3 className="font-bold py-4">{name}</h3>
       <h4>{cuisines.join(",")}</h4>
       <h4>{avgRating}</h4>
       <h4>{deliveryTime}</h4>       
       <h5>{costForTwo}</h5>
       

      </div>
    );
};

