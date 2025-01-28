import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./src/components/Header";
import {Body} from "./src/components/Body";





{/* <div id="parent">
     <div id="child1">

     </div>
     <div id="child2">

     </div>
 </div> */}


// const parent = React.createElement("div", {id:"parent"}, 
//                [React.createElement("div", {id:"child1"}, "I'm child1"), 
//                  React.createElement("div", {id:"child2"}, "I'm child2")
//                ]);

//The below written code is react code for the same nested div picture HTML code written above.
//For having siblings inside of a react element we go for array as third argument in React.createElement.


// const title = (<h1 id="title">Yo. How are y'all</h1>); //react element using JSX

// const Component1 = () =>(
//         <h1 id='heading1'>I'm heading1</h1>
// );//creating react functional component

// const random = 10000;//any JS code can be written inside of curly braces
//see line 39


// const Component2 = () => (
      
//       <div id="container">
//         {random} 
//         <h1 id="heading2">Yo. How are y'all</h1>
//         <Component1/>
//       </div>
       
// );// And this putting components inside of the components is termed as components composition.





// const heading = React.createElement("h1", {}, "Hello World from React");
//we created heading tag insideof the react.
        //this React.createElement takes 3 arguments "h1" name of the tag to be created, {} an empty object,
        //"" statement to be written inside of the h1 or the tag just created.
        //the third argument in this is {} this is to contain the props to this react element i.e. id or class or any further css you wanna attach to it.

//header
  //logo
  //navbar
//body
  //search
  //res-container
    //res-card
      //-Name of restau
      //-star rating, time of delivery
//footer
   //copyright
   //links
   

  
    
// const ResCard = ({resName,cuisine,stars,time}) =>{} we can do the de-structuring like this also
//we can simply write const ResCard = (props) =>{
  // ......
  // <h3>{props.resName}</h3>
  // <h4>{props.cuisine}</h4>
  // <h4>{props.stars}</h4>
  // <h4>{props.time}</h4>
  // }

 

            

  




const AppLayout = () => {
        return (
           <div className="layout">
             <Header/>
             <Body/>
           </div>
           
        );
};

const root = ReactDOM.createRoot(document.getElementById("root"));//we create a root inside of the react and here
        //we render everything whichreact does and requires you to put in.
root.render(<AppLayout/>);//rendered the heading inside of root.
