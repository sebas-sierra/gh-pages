import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import blueberries from '../../assets/img/imagenes/portfolio-blueberries.png';
import prode from '../../assets/img/imagenes/portfolio-prode.png';
import detaller from '../../assets/img/imagenes/portfolio-detaller.png';
import dibujos from '../../assets/img/imagenes/portfolio-dibujos.png';
import bnm from '../../assets/img/imagenes/portfolio-bnm.png';

const Trabajos = () => {
  return (
    <Row className='grilla'>
        <Col md={4}>
          <Nav.Link href='/gh-pages/#/capitulos/prod'><Image src={detaller} fluid></Image></Nav.Link>
          
        </Col>
        <Col md={8}>
            <Row>
                <Col md={5}>
                <Nav.Link href='/gh-pages/#/trabajos/prode'><Image src={prode} fluid></Image></Nav.Link>
                </Col>
                <Col md={7}>
                  <Nav.Link href='/gh-pages/#/trabajos/blueberries'><Image src={blueberries} fluid></Image></Nav.Link>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                <Nav.Link href='/gh-pages/#/trabajos/bnm'><Image src={bnm} fluid></Image></Nav.Link></Col>
                <Col md={4}>
                <Nav.Link href='/gh-pages/#/trabajos/ilustracion'><Image src={dibujos} fluid></Image></Nav.Link></Col>
            </Row>
        </Col>
    </Row>
    
  )
}

export default Trabajos