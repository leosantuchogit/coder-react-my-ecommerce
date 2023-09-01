import { createContext, useState } from "react";

export const CartContext = createContext({
    cart:[]})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
   
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}]) // ... los tres puntos hace que ponga en el array lo que ya tenia + lo nuevo

        } else {
            console.error("El producto ya fue agregado"); // buscar el item con el "indexOf" para agregar cantidad     
        
            setCart(cart.map((product)=>{
                if(product.id === item.id){
                    return {...product, quantity: product.quantity + quantity}
                }else{
                    return product
                }
            }))
        
        }

    }    

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        
        // Comparto todas las funciones a los componentes hijos: 
        // Todo lo que pongo dentro del "value" lo voy a poder compartir con los children 

        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    )

}