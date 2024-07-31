import Contador from './Contador';
import { CartContext } from '../../context/CartContext';
import { React, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';

const ItemDetail = ({item}) => {

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    //console.log('Funciona' + cantidad + 'unidades - ItemDetail');
    addToCart(item, cantidad);
  };
  
  return (
    <Row>
      <p>ITEMDETAIL</p>
      <Col><img src={item.img} width="400px" alt={item.title}/></Col>
      <Col>
        <h2>{item.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique suscipit maiores commodi laborum numquam est obcaecati deleniti velit neque voluptate assumenda, illum cum totam quaerat quos quo vitae labore.
            Placeat neque, itaque libero pariatur, rerum, doloribus nihil similique minus assumenda maiores aut hic amet corporis repellendus. Eligendi libero accusamus fugit atque minus aut reiciendis, perferendis nobis, animi odio nostrum.</p>
        <h3>${item.price}</h3>
        <Contador stock={item.stock} onAdd={onAdd}></Contador>
      </Col>
    </Row>
  )
}

export default ItemDetail