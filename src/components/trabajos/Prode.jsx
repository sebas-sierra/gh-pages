import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, Col, Row, Stack } from 'react-bootstrap';
import prode1 from '../../assets/img/portfolio/prode/prode-3.png';
import prode2 from '../../assets/img/portfolio/prode/prode-2.png'

const Prode = () => {
  return (
    <div className='presentacion'>
      <div className='presentacion-header'>
        <h1 className='portfolio-titulo'>Prode</h1>
        <Stack direction='horizontal' gap={1}><Badge pill bg="secondary"> ux / ui </Badge><Badge pill bg="secondary">github</Badge><Badge pill bg="secondary">javascript - html - css - bootstrap</Badge><Badge pill bg="secondary"> coding</Badge></Stack>
      </div>
      <div className='presentacion-body'>
        <p className='portfolio-bajada'>Proyecto final para el curso de Javascript de CODERHOUSE. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
        <Button variant="outline-primary" href='https://sebas-sierra.github.io/entrega-final/'>link al prode</Button>
      </div>
      <Col md={8}><img src={prode1} width="100%" overflow="hidden"/></Col>
      <Card class='pb-3'>
        <Card.Img src={prode1} />
        <Card.ImgOverlay width='250px' style={{marginRight: '300px'}}>
          <Card.Title><h1 className='portfolio-titulo'>Prode</h1>
          <Stack direction='horizontal' gap={1}><Badge pill bg="secondary"> ux / ui </Badge><Badge pill bg="secondary"> coding</Badge></Stack>
          </Card.Title>
          <Card.Text><p className='portfolio-bajada'>Proyecto final para el curso de Javascript de CODERHOUSE.</p></Card.Text>
          
          <Button variant="outline-primary" href='https://sebas-sierra.github.io/entrega-final/'>link al prode</Button>
          
        </Card.ImgOverlay>
      </Card>
      
      <img src={prode2} width="100%" overflow="hidden"/>
    </div>
  )
}

export default Prode