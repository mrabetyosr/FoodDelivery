
import { createContext, useEffect, useState } from 'react'
import { food_list } from "../assets/frontend_assets/assets"
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

     const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    
    const contexteValue ={
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount

    }
    return(
        <StoreContext.Provider value={contexteValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;