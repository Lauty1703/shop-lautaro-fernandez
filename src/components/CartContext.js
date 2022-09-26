import { createContext, useState } from "react";

export const CartContext = createContext();

const CarContextProvider = ({children})=>{

    const[cartList,setCartList]=useState([]);

    
    const addItem = (producto, qty) => {
        setCartList([...cartList, producto]);

        // if (isInCart(qty.id)) {
		// 	setCartList(
		// 		cartList.map((product) => {
		// 			return product.id === qty.id
		// 				? { ...product, quantity: product.quantity + quantity }
		// 				: product;
		// 		}),
		// 	);
		// } else {
		// 	setCartList([...cartList, { ...qty, quantity }]);
		// }

    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }

    const isInCart = (id) => {
        return cartList.find(item => item.id === id) ? true : false;
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            clear,
            removeItem,
            isInCart}}>
            {children} 

        </CartContext.Provider>
    )
}

export default CarContextProvider;