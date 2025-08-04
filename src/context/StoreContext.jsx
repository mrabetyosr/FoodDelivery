
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

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);
    
    const contexteValue ={
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems

    }
    return(
        <StoreContext.Provider value={contexteValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;