import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Col, Row, Stack } from 'react-bootstrap';
import prode1 from '../../assets/img/portfolio/prode/prode-3.png';
import prode2 from '../../assets/img/portfolio/prode/prode-2.png'

const Prode = () => {
  return (
    <div className='presentacion'>
      <Row>
        <Col md={4}>
          <h1 className='portfolio-titulo'>Prode</h1>
          <Stack direction='horizontal' gap={1}><Badge pill bg="secondary"> ux / ui </Badge><Badge pill bg="secondary"> coding</Badge></Stack>
          <p className='portfolio-bajada'>Proyecto final para el curso de Javascript de CODERHOUSE.</p>
          <Button variant="outline-primary" href='https://sebas-sierra.github.io/entrega-final/'>link al prode</Button>
        </Col>
        <Col md={8}><img src={prode1} width="100%" overflow="hidden"/></Col>
      </Row>
      
      <img src={prode2} width="100%" overflow="hidden"/>
    </div>
  )
}

export default Prode