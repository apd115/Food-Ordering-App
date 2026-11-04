import { menu_api_URL, USE_MOCK_DATA } from "./constants";
import { getMockMenu } from "./mockMenu";
import { useEffect, useState } from "react";

  const useRestaurantInfo = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
           fetchData();
    },[resId])

    const fetchData = async () =>{
        if (USE_MOCK_DATA) {
            setResInfo(getMockMenu(resId));
            return;
        }
        try {
            const data = await fetch(menu_api_URL+resId);
            const json = await data.json();
            setResInfo(json.data);
        } catch (err) {
            console.error("Failed to load menu:", err);
        }
    }


    return resInfo;
}
export default useRestaurantInfo;