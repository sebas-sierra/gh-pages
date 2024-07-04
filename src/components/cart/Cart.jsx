import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, deleteOne, deleteAll } = useContext(CartContext);
    return (
        <div>
            <h3>aca voy a mostrar los elementos enviados al cart por la funcion onAdd</h3>
            <p>En esta vista voy a poder visualizar los items enviados a mi cart desde el itemDetail llamandolos desde mi contexto CartContext</p>

            {cart.map((prod) => {
                return (<div>
                    <img src={prod.img} alt={prod.title} width="180px" />
                    <div>
                        <h3>{prod.title}</h3>
                        <h3>{prod.cantidad}</h3>
                        <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                    </div>
                </div>)
            })}
            <h3>TOTAL: $.-</h3>
            <button onClick={deleteAll}>Vaciar el carrito</button>
        </div>
    )
}

export default Cart