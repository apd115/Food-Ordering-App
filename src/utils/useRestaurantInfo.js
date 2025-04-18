import { menu_api_URL } from "./constants";
import { useEffect, useState } from "react";

  const useRestaurantInfo = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
           fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(menu_api_URL+resId);
        const json = await data.json();
        setResInfo(json.data);

    }


    return resInfo;
}
export default useRestaurantInfo;