import React from "react";
// import {Component} from "react"; //destructuring
// class UserClass extends Component{}
class UserClass extends React.Component{
    constructor(props){
      super(props);
      
   
    //Inside of the constructor, this is the best place to declare and use state variables.
    this.state= {
      count: 0,
      // count1 : 1;
    }; //this is the way to use state variables in class based components as there were no hooks earlier in the react.
       
    }
    componentDidMount(){
      //this functions invokes at the very end when component mounting is done comppletely
    }
    render(){
      
      console.log(this.props.Name+"Render")
     
      const {Name, Location, url} = this.props;
      const {count, count1} = this.state;
        return(
        <div>
        <h2>{Name}</h2>
        <h3>{Location}</h3>
        <img src={url}></img>
        {/* <h3>Contact : @/apd</h3> */}
        {/* <h3>{count}</h3> */}
        {/* <h3>{count1}</h3> */}
        {/* <button onClick={()=>{
          this.setState({
            count:this.state.count+1,  //this is the way to update state variable in class based component
          });
        }}>Click and inscrease</button> */} 
       </div>
        );
    }   
}
export default UserClass;
