import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button, Row, Col, Card } from 'react-bootstrap';

const Cart = () => {
    const { cart, deleteOne, deleteAll, totalPrecio } = useContext(CartContext);
    return (
        <div>
            <h3>aca voy a mostrar lo s elementos enviados al cart por la funcion onAdd</h3>
            <p>En esta vista voy a poder visualizar los items enviados a mi cart desde el itemDetail llamandolos desde mi contexto CartContext</p>
            

            {cart.map((prod) => {
                return (
               
                    <Col>
                    <Card className='mb-3'>
                        <Row className='g-0'>
                        <Col className='col-md-4'>
                            <Card.Img  className='img-fluid rounded-start' src={prod.img}alt={prod.title} width="180px" ></Card.Img>
                        </Col>
                        <Col className='col-md-8'>
                            <Card.Body>
                                <Card.Title>{prod.title}</Card.Title>
                                <Card.Text>Cant. de unidades: {prod.cantidad}</Card.Text>
                                <Button onClick={() => deleteOne(prod.id)}>Eliminar</Button>
                                {/* <button onClick={() => deleteOne(prod.id)}>Eliminar</button> */}
                            </Card.Body>
                        </Col>
                        </Row>
                    </Card>
                    {/* <img src={prod.img} alt={prod.title} width="180px" />
                    <div>
                        <h3>{prod.title}</h3>
                        <h4>Cant. de unidades: {prod.cantidad}</h4>
                        <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                    </div> */}
                    </Col>
                 )
            })}

            
            <h3>TOTAL: $.- <span>{totalPrecio()}</span></h3>
            <button onClick={deleteAll}>Vaciar el carrito</button>
            <Button href='/gh-pages/#/checkout'>Checkout</Button>
            <button>checkout</button>
            
        </div>
    )
}

export default Cart