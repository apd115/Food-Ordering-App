import { useState } from "react";

export const User = ({Name,Location}) =>{
    const[count] = useState(0);
    const[count1] = useState(1);
    return(
       <div>
        <h2>{Name}</h2>
        <h3>{Location}</h3>
        <h3>Contact : @/apd</h3>
        <h3>{count}</h3>
        <h3>{count1}</h3>
       </div>
    );
}