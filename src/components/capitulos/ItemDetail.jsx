import Contador from './Contador';
import { CartContext } from '../../context/CartContext';
import { ModalContext } from '../../context/ModalContext';
import { React, useContext } from 'react';
import { Row, Col, Badge, Button, Stack, Card } from 'react-bootstrap';
import UseModal from '../UseModal';
const ItemDetail = ({item}) => {

  const { addToCart } = useContext(CartContext);
  const { handleShow } = useContext(ModalContext)

  const onAdd = (cantidad) => {
    //console.log('Funciona' + cantidad + 'unidades - ItemDetail');
    addToCart(item, cantidad);
  };
  
  return (
    <Row>
      {/* <p>ITEMDETAIL</p> */}
      
        <Col md={7}>

        <Card onClick={handleShow}>
          <Card.Img src={item.img}  width="100%" alt={item.title} />
          <Card.ImgOverlay>
            <Stack direction='horizontal' gap={1}>
              <Badge bg="dark">{item.category}</Badge>
              <Badge bg="success">15% off</Badge>
              
            </Stack>
          </Card.ImgOverlay>
        </Card>
        {/* <Button href='/gh-pages/#/capitulos/prod' variant="secondary" size="sm">Volver</Button> */}
        {/* <img src={item.img} onClick={handleShow} width="100%" alt={item.title}/> */}
      </Col>
      <Col md={5}>
        <h1 className='portfolio-titulo'>{item.title}</h1>
        <Stack direction='horizontal' gap={1}>
          <Badge pill bg="secondary">{item.category}</Badge>
          <div className="ms-auto"><h4>${item.price}.-</h4></div>
        </Stack>
        
        <p className='portfolio-bajada pt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique suscipit maiores commodi laborum numquam est obcaecati deleniti velit neque voluptate assumenda, illum cum totam quaerat quos quo vitae labore.
          Placeat neque, itaque libero pariatur, rerum, doloribus nihil similique minus assumenda maiores aut hic amet corporis repellendus. Eligendi libero accusamus fugit atque minus aut reiciendis, perferendis nobis, animi odio nostrum.</p>
        <Contador stock={item.stock} onAdd={onAdd}></Contador>
      </Col>
      
      <UseModal item={item}/>
    </Row>
  )
}

export default ItemDetail