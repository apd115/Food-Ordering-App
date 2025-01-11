{/* <div id="parent">
     <div id="child1">

     </div>
     <div id="child2">

     </div>
 </div> */}


const parent = React.createElement("div", {id:"parent"}, 
               [React.createElement("div", {id:"child1"}, "I'm child1"), 
                 React.createElement("div", {id:"child2"}, "I'm child2")
               ]);









const heading = React.createElement("h1", {}, "Hello World from React");//we created heading tag insideof the react.
        //this React.createElement takes 3 arguments "h1" name of the tag to be created, {} an empty object,
        //"" statement to be written inside of the h1 or the tag just created.
        //the third argument in this is {} this is to contain the props to this react element i.e. id or class or any further css you wanna attach to it.
const root = ReactDOM.createRoot(document.getElementById("root"));//we create a root inside of the react and here
        //we render everything whichreact does and requires you to put in.
root.render(parent);//rendered the heading inside of root.
