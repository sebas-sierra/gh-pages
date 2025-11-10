import Contador from './Contador';
import { CartContext } from '../../context/CartContext';
import { ModalContext } from '../../context/ModalContext';
import { React, useContext } from 'react';
import { Row, Col, Badge, Button, Stack, Card } from 'react-bootstrap';
import UseModal from '../UseModal';
import ProdRelacionados from './ProdRelacionados';
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
            <a href='/gh-pages/#/capitulos/prod/category/furniture'><Badge bg="dark">{item.category}</Badge></a>
            <a href="http://"><Badge bg="success">15% off</Badge></a>
            </Stack>
          </Card.ImgOverlay>
        </Card>
        {/* <Button href='/gh-pages/#/capitulos/prod' variant="secondary" size="sm">Volver</Button> */}
        {/* <img src={item.img} onClick={handleShow} width="100%" alt={item.title}/> */}
      </Col>
      
      <Col md={5}>
        <h1 className='portfolio-titulo'>{item.title}</h1>
        <Stack direction='horizontal' gap={1}>
          <a href='/gh-pages/#/capitulos/prod/category/furniture'><Badge pill bg="secondary">{item.category}</Badge></a>
          <div className="ms-auto"><h4 className='portfolio-titulo'>${item.price}.-</h4></div>
        </Stack>
        
        <p className='portfolio-bajada pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique suscipit maiores commodi laborum numquam est obcaecati deleniti velit neque voluptate assumenda, illum cum totam quaerat quos quo vitae labore.
          Placeat neque, itaque libero pariatur, rerum, doloribus nihil similique minus assumenda maiores aut hic amet corporis repellendus.</p>
          <p className='portfolio-bajada pt-4 text-justify'>Dimensiones: 60 x 40 x 35cm</p>
        <hr />
        <Contador stock={item.stock} onAdd={onAdd} ></Contador>
        <hr />
        <ProdRelacionados/>
        <hr />
      </Col>
      
      <UseModal item={item}/>
    </Row>
  )
}

export default ItemDetail