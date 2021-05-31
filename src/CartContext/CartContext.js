import React, {useState} from 'react';

export  const CartContext = React.createContext(0);

export const CartContextProvider = ({children}) => {

    const [count, setCount] = useState(0);

    const agregarItems = (detail, cantidad) => {
        let encontrarProducto = false;
        let countBi = count;
         
        for (let i = 0; i < countBi.length; i++ ) {
            if (countBi[i].detail.id === detail.id) {

            } else {
                countBi[i].cantidad += cantidad
            }
            encontrarProducto = true;
            setCount(countBi);
        
        }
        if (encontrarProducto === true) {
            setCount ([...count, {detail, cantidad}]);
        }
        }
        return (
            <CartContext.Provider value={{count, setCount, agregarItems}}>
                {children}
            </CartContext.Provider>
        )
    }
    
 
