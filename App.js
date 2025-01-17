import React from "react";
import ReactDOM from "react-dom/client";




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


const title = (<h1 id="title">Yo. How are y'all</h1>); //react element using JSX

const Component1 = () =>(
        <h1 id='heading1'>I'm heading1</h1>
);//creating react functional component

const random = 10000;//any JS code can be written inside of curly braces
//see line 39


const Component2 = () => (
      
      <div id="container">
        {random} 
        <h1 id="heading2">Yo. How are y'all</h1>
        <Component1/>
      </div>
       
);// And this putting components inside of the components is termed as components composition.





// const heading = React.createElement("h1", {}, "Hello World from React");
//we created heading tag insideof the react.
        //this React.createElement takes 3 arguments "h1" name of the tag to be created, {} an empty object,
        //"" statement to be written inside of the h1 or the tag just created.
        //the third argument in this is {} this is to contain the props to this react element i.e. id or class or any further css you wanna attach to it.
const root = ReactDOM.createRoot(document.getElementById("root"));//we create a root inside of the react and here
        //we render everything whichreact does and requires you to put in.
root.render(<Component2/>);//rendered the heading inside of root.
