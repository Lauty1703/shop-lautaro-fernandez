import { createContext, useState } from "react";

export const CartContext = createContext();

const CarContextProvider = ({children})=>{

    const[cartList,setCartList]=useState([]);

    
    const addItem = (producto, qty) => {

        setCartList([...cartList,producto])
        if(isInCart(producto.id)===undefined){
            producto.qty=qty;
        setCartList([...cartList, producto]);
        }else{setCartList(cartList.map(product=>product.id===producto.id?{...product,qty:product.qty+qty}:product));

       

}

    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }

    const isInCart = (id) => {
        return cartList.find(item => item.id === id);
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