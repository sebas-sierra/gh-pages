import React, { useState } from 'react';
import { Button, Modal, Carousel, Row, Col, Badge, Stack, Card, Image } from 'react-bootstrap';

import labelA from '../../assets/img/portfolio/waterclor/waterclor-mockup.png';

const Waterclor = () => {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='presentacion'>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <div className='presentacion-header'>
            <h1 className='portfolio-titulo'>Etiquetas para envases<br /> de producto</h1>
            <Stack direction='horizontal' gap={1} className='pb-2'><Badge pill bg="secondary"> etiquetado </Badge><Badge pill bg="secondary"> producto </Badge><Badge pill bg="secondary">sistema grafico</Badge></Stack>
            <Stack direction='horizontal' gap={1}><Badge pill bg="dark">illustrator</Badge><Badge pill bg="dark">photoshop</Badge><Badge pill bg="dark">indesign</Badge></Stack>
          </div>
          <div className='presentacion-body'>
            <p className='portfolio-bajada'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
          </div>
        </Col>
        <Col md="2"></Col>
      </Row>
      
        
      


      <Card onClick={handleShow} class='pb-3'>
        <Card.Img src={labelA} />
        {/* <Card.ImgOverlay width='250px' style={{marginRight: '300px'}}>
          <Card.Title><h3>Etiquetas para envases de producto</h3></Card.Title>
          <Card.Text>Minus itaque optio, nostrum quam autem cum quis nesciunt  <br/>sint odio eum aperiam distinctio dicta.</Card.Text>
          <Button variant="primary"> ver mas</Button>
          </Card.ImgOverlay> */}
      </Card>
      
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <Image src={labelA} className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Waterclor