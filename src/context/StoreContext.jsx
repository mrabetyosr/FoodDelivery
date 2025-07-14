
import { createContext, useState } from 'react'
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


    const contexteValue ={
        food_list

    }
    return(
        <StoreContext.Provider value={contexteValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;