import React from 'react';
import { Button, Row, Col, Badge, Stack, Card, Image } from 'react-bootstrap';

import labelA from '../../assets/img/portfolio/waterclor/waterclor-mockup.png';

const Waterclor = () => {
  return (
    <div className='presentacion'>
        <Card class='pb-3'>
            <Card.Img src={labelA} />
            <Card.ImgOverlay width='250px' style={{marginRight: '300px'}}>
                <Card.Title><h3>Etiquetas para envases de producto</h3></Card.Title>
                <Card.Text>Minus itaque optio, nostrum quam autem cum quis nesciunt  <br/>sint odio eum aperiam distinctio dicta.</Card.Text>
                <Button variant="primary"> ver mas</Button>
            </Card.ImgOverlay>
        </Card>
    </div>
  )
}

export default Waterclor