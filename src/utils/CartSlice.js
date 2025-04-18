import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice( {
    name : 'cart',
    initialState: {
        items:[],
             
    },
    reducers:{
        //mutating the store here
        addItem : (state,action)=>{
            state.items.push(action.payload);
          },
        removeItem : (state) => {
            state.items.pop();

        },
        //original state = {items:"pizza"}
        clearCart : (state) =>{
            state.items.length = 0;
            //can be written like this also return {items:[]};
        },
        
    },
});

//createSlice returns an object containing actions and reducers.

export default  CartSlice.reducer;
export  const {addItem, removeItem, clearCart} = CartSlice.actions;
