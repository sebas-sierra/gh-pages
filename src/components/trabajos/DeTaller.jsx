import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Col, Row } from 'react-bootstrap'
import detaller from '../../assets/img/portfolio/de-taller/de-taller-h.png';

const DeTaller = () => {
  return (
    <div className='presentacion'>
      <Row>
      <Col md="2"></Col>
      <Col md="8">
        <div className='presentacion-header'>
        <h1 className='portfolio-titulo'>De-Taller</h1>
        <Badge pill bg="secondary"> branding </Badge><br/>
      </div>
      <div className='presentacion-body'>
        <p className='portfolio-bajada'>de-Taller es un emprendimiento propio que inicio en el año 2013 centrado en la produccion de objetos de madera como vitrinas, lamparas, exhibidores para discos de vinilo usando como materia prima madera recuperada e interviniendo algunas piezas usando serigrafia.</p><br/>
        <Button variant="outline-primary" href='/gh-pages/#/capitulos/prod'>Tiendita De-Taller</Button>
        <img src={detaller} alt='' style={{width:"100%"}}/><br/><br/>
      </div>
      </Col>
      <Col md="2"></Col>
      </Row>
      
    </div>
  )
}

export default DeTaller