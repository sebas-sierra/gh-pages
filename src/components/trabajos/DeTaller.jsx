import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Col, Row, Card } from 'react-bootstrap'
import detallerA from '../../assets/img/portfolio/de-taller/de-taller-h.png';
import detallerB from '../../assets/img/portfolio/de-taller/de-taller-flyer.png';
import detallerC from '../../assets/img/portfolio/de-taller/de-taller-tote-bag.png';

const DeTaller = () => {
  return (
    <>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <div className='presentacion-header'>
            <h1 className='portfolio-titulo'>De-Taller</h1>
            <Badge pill bg="secondary"> branding </Badge><br />
          </div>
          <div className='presentacion-body'>
            <p className='portfolio-bajada'>de-Taller es un emprendimiento propio que inicio en el año 2013 centrado en la produccion de objetos de madera como vitrinas, lamparas, exhibidores para discos de vinilo usando como materia prima madera recuperada e interviniendo algunas piezas usando serigrafia.</p><br />
            <Button variant="outline-primary" href='/gh-pages/#/capitulos/prod'>Tiendita De-Taller</Button>
            <img src={detallerA} alt='' style={{ width: "100%" }} /><br /><br />
          </div>
        </Col>
        <Col md="2"></Col>
      </Row>
      
      <div className='presentacion mb-4' >
        <Card.Img src={detallerB} />
      </div>

      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <Card>
            <Card.Img src={detallerC} >
         
          </Card.Img>
          </Card>
        </Col>
        <Col md="2"></Col>
      </Row>






      <div className='presentacion'>
      </div>
    </>

  )
}

export default DeTaller