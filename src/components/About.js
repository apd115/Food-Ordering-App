 import { User } from "./User";
import UserClass from "./UserClass";
import React from "react";
import { UserContext } from "../utils/UserContext";
 
//  const About = () => {
//     return(
//         <div>
//             <h1>About Us</h1>
//             <h2>This is my about us page</h2>
//             <User Name={"Aparna Dwivedi"} Location={"Gurugram"}/>
//             <UserClass Name={"Aparna Dwivedi(class)"} Location={"Gurugram(class)"}/>
//         </div>
//     );
// };

class About extends React.Component{
     constructor(props){
        super(props);

        this.state = {
            userInfo:{
                Name:"dummy",
                Location:"dummy", 
            },
         }
        
     }

    
     
     async componentDidMount(){
        const data = await fetch("https://api.github.com/users/apd115");
        const json = await data.json();
        console.log(json);
        
        this.setState({
            userInfo:json,
        });
       
     }
      
    
     render(){
         const {name,location,avatar_url} = this.state.userInfo;
        return (
            <div>
                 <h1>About Us</h1>
                    <h2>This is my about us page</h2>
                    {/* <User Name={name} Location={location} /> */}
                    <UserClass Name={name} Location={location} url ={avatar_url}/>
                    {/* <UserClass Name={name} Location={location}/> */}
                    <div>
                        loggedInUser :
                        <UserContext.Consumer >
                            {
                                ({loggedInUser})=>(<h1>{loggedInUser}</h1>)
                            }

                        </UserContext.Consumer>
                    </div>
                    
                </div>
        );
     }
}

export default About;