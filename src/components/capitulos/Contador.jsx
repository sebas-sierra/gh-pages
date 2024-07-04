import React, { useState } from 'react'

const Contador = ({ stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(1);
    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    };

    const reset = () => {
        setCantidad(1);
    };
    return (
        <div><h1>Contador</h1>
            <button disable={cantidad === stock} onClick={sumar} variant="outline-secondary">+</button>
            <button onClick={reset} variant="outline-secondary">Reset</button>
            <button onClick={restar} variant="outline-secondary">-</button>
            <button onClick={() => { onAdd(cantidad) }} variant="outline-secondary">Agregar al carrito</button>
            <p>{cantidad}</p>
        </div>
    )
}

export default Contador