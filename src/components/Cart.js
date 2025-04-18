import { ItemList } from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/CartSlice";


const Cart = (item) =>{

    const items = useSelector((store)=>store.cart.items);

    const store = useSelector((store)=>store);
    const {CartItems} = store.cart.items;

    const dispatch = useDispatch();

    const handleClearCart =()=>{
    dispatch(clearCart());
}
    return(
     <div className="items-center w-6/12 m-auto">

        <h1 className="font-bold text-2xl text-center my-10">Cart</h1>
        
        <div className="flex justify-center" >
        <button className ="px-4 py-2 bg-pink-900 text-white rounded" 
            onClick={()=>handleClearCart()}>
            Clear Cart
        </button>
        </div>
        <div className="flex justify-center">
            {items.length === 0 && <h1 className="m-5 p-5">Cart says "FILL ME" as I see you hungry 😋</h1>}
        </div>
        
       
        <ItemList items={items}/>

    </div>
    );
}

export default Cart;