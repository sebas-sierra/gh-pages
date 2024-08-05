import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button, Image, Row, Col, Card, Table } from 'react-bootstrap';

const Cart = () => {
    const { cart, deleteOne, deleteAll, totalPrecio } = useContext(CartContext);
    return (
        <div>
            <h3>aca voy a mostrar lo s elementos enviados al cart por la funcion onAdd</h3>
            <p>En esta vista voy a poder visualizar los items enviados a mi cart desde el itemDetail llamandolos desde mi contexto CartContext</p>
            <Table responsive >
                <thead>
                    <tr bordered>
                        <th xs={6} md={4}> #</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((prod) => {
                        return (
                            <tr>
                                <td><Image src={prod.img} alt={prod.title} width={171} height={180} thumbnail /></td>
                                <td><Card.Title>{prod.title}</Card.Title> <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quo impedit accusantium aspernatur dolorem facilis repellat incidunt quasi ducimus iste vel, iusto doloribus quidem officia eum eius totam dolore nulla?</Card.Text></td>
                                <td><Card.Text>{prod.cantidad}</Card.Text></td>
                                <td>${prod.price}.-</td>
                                <td><Button onClick={() => deleteOne(prod.id)}>Eliminar</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Card>
                <Card.Header>Totales del carrito<Button onClick={deleteAll}>Vaciar el carrito</Button></Card.Header>
                <Card.Body>
                    subtotal: $. <span>{totalPrecio()}</span> -
                    <hr />
                    envio: $. 3000 -
                    <hr />
                    total: $. (sumar subtotal + envio) -
                    
                </Card.Body>
                <Card.Footer>
                    <Button href='/gh-pages/#/checkout'>Checkout</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Cart