import React, {useState} from 'react';

 const CartContext = React.createContext(0);
 

 const CartContextProvider = ({children}) => {

    const [count, setCount] = useState (0);
        return(
            <CartContext.Provider value={[count, setCount] }>{children}</CartContext.Provider>
        )
 }

export default {CartContext, CartContextProvider};