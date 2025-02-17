import { useState, createContext } from "react";
export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);
    
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            //alert('ya esta en el carrito, sumale la cantidad')
            sumarCantidad(item, cantidad);
            
        } else {
            setCart([...cart, {...item, cantidad}]); 
            
        }
    };

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    };
    
    const sumarCantidad = (itemPorAgregar, cantidad) => {
        const cartActualizado = cart.map((prodDelCarrito) => {
            if (itemPorAgregar.id === prodDelCarrito.id) {
                const prodActualizado = {
                    ...prodDelCarrito,
                    cantidad: prodDelCarrito.cantidad + cantidad,
                };
                return prodActualizado
            } else {
                return prodDelCarrito;
            }
        });

        setCart(cartActualizado)
    }

    const deleteAll = () => {
        setCart ([]);
    }
    
    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    }

    const totalUnidades = () => {
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            count = count += prod.cantidad
        })
        return count

     }

    // const totalPrecio = () => 1000;

    const totalPrecio = () => {
        let total = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            total = total + (prod.price*prod.cantidad)

        })
        return total

    };

    //console.log(cart);

    return (
        <CartContext.Provider value={{cart, addToCart, deleteAll, deleteOne, totalUnidades, totalPrecio}}>
            {children}
        </CartContext.Provider>
        )
    };

export default CartProvider