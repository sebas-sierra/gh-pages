import Contador from './Contador';
import { CartContext } from '../../context/CartContext';
import { React, useContext } from 'react';
import { Row, Col, Badge, Button } from 'react-bootstrap';

const ItemDetail = ({item}) => {

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    //console.log('Funciona' + cantidad + 'unidades - ItemDetail');
    addToCart(item, cantidad);
  };
  
  return (
    <Row>
      {/* <p>ITEMDETAIL</p> */}
      
      <Col xs={8}><Button href='/gh-pages/#/capitulos/prod' variant="secondary" size="sm">Volver a Itemlist</Button><img src={item.img} width="100%" alt={item.title}/></Col>
      <Col xs={4}>
        <Badge bg="light" text="dark">{item.category}</Badge>
        <h2>{item.title}</h2>
        <h2>${item.price}.-</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique suscipit maiores commodi laborum numquam est obcaecati deleniti velit neque voluptate assumenda, illum cum totam quaerat quos quo vitae labore.
          Placeat neque, itaque libero pariatur, rerum, doloribus nihil similique minus assumenda maiores aut hic amet corporis repellendus. Eligendi libero accusamus fugit atque minus aut reiciendis, perferendis nobis, animi odio nostrum.</p>
        <Contador stock={item.stock} onAdd={onAdd}></Contador>
      </Col>
    </Row>
  )
}

export default ItemDetail