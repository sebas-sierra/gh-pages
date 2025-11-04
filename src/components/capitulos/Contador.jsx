import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Stack } from 'react-bootstrap';

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
            
            {/* <div>
                <InputGroup className='row'>
                    <Col md={2}><Button onClick={restar} variant="outline-secondary">-</Button></Col>
                    <Col md={3}><Form.Control value={`${cantidad}`} /></Col>
                    <Col md={2}><Button onClick={sumar} variant="outline-secondary">+</Button></Col>
                    <Col md={5}><Button onClick={() => { onAdd(cantidad) }} variant="primary">Agregar al carrito</Button></Col>
                </InputGroup>
            </div> */}

        <Stack direction='horizontal' gap={1}>
            
            {/* <button disable={cantidad === stock} onClick={sumar} variant="outline-secondary">+</button>
            <button onClick={reset} variant="outline-secondary">Reset</button>
            <button onClick={restar} variant="outline-secondary">-</button>
            <p>{cantidad}</p>
            <hr /> */}

            

            <div>

            <InputGroup>
                <Button onClick={restar} variant="outline-secondary">-</Button>
                <Form.Control size="sm" value={`${cantidad}`} />
                <Button onClick={sumar} variant="outline-secondary">+</Button>
            </InputGroup></div>
            <div className="ms-auto">
            <Button onClick={() => { onAdd(cantidad) }} variant="primary">Agregar al carrito</Button></div>
            

            {/* <InputGroup className="mb-3">
                <Button onClick={sumar} variant="outline-secondary">+</Button>
                <Button onClick={reset} variant="outline-secondary">Reset</Button>
                <Button onClick={restar} variant="outline-secondary">-</Button>
                <Form.Control value={`${cantidad}`} />
            </InputGroup> */}
            
            <hr />
            {/* <button onClick={() => { onAdd(cantidad) }} variant="outline-secondary">Agregar al carrito</button> */}
        </Stack>
        </div>
    )
}

export default Contador