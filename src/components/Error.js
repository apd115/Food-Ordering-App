import { useRouteError } from "react-router-dom";

export const Error = () =>{
    const err = useRouteError();
    return(
        <div>
            <h1>Oops!!!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}</h3>
        </div>
    );
};
