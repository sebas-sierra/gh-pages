import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';

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
        <div>
            <hr />
            <h3>Contador</h3>
            {/* <button disable={cantidad === stock} onClick={sumar} variant="outline-secondary">+</button>
            <button onClick={reset} variant="outline-secondary">Reset</button>
            <button onClick={restar} variant="outline-secondary">-</button>
            <p>{cantidad}</p>
            <hr /> */}

            <InputGroup className="mb-3">
                <Button onClick={sumar} variant="outline-secondary">+</Button>
                <Button onClick={reset} variant="outline-secondary">Reset</Button>
                <Button onClick={restar} variant="outline-secondary">-</Button>
                <Form.Control value={`${cantidad}`} />
            </InputGroup>
            
            <hr />
            {/* <button onClick={() => { onAdd(cantidad) }} variant="outline-secondary">Agregar al carrito</button> */}
            <Button onClick={() => { onAdd(cantidad) }} variant="primary">Agregar al carrito</Button>
        </div>
    )
}

export default Contador