import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Col, Row, Card } from 'react-bootstrap'
import detallerPaleta from '../../assets/img/portfolio/de-taller/paleta-color.png';
import detallerBrand from '../../assets/img/portfolio/de-taller/de-taller-h.png';
import detallerBrandDesgloce from '../../assets/img/portfolio/de-taller/detaller-marca-desgloce.png';
import detallerAplicacion from '../../assets/img/portfolio/de-taller/de-taller-grilla_maqueta-2.png';
import detallerTotebag from '../../assets/img/portfolio/de-taller/de-taller-totebag_mockup.png';
import detallerTotebagBlue from '../../assets/img/portfolio/de-taller/de-taller-totebagazul_mockup.png'
import { ThemeContext } from '../../context/ThemeContext';

const DeTaller = () => {
  const { texts } = useContext(ThemeContext)
  return (
    <>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <div className='presentacion-header'>
            <h1 className='portfolio-titulo'>{texts.detaller0a}</h1>
            <Badge pill bg="secondary"> branding </Badge><br />
          </div>
          <div className='presentacion-body'>
            <p className='portfolio-bajada'><b>de-Taller</b>{texts.detaller0b}</p><br />
            <Button variant="outline-primary" href='/gh-pages/#/capitulos/prod'>{texts.detaller0f}</Button>
            {/* <img src={detallerA} alt='' style={{ width: "100%" }} /><br /><br /> */}
          </div>
        </Col>
        <Col md="2"></Col>
      </Row>
      
      <div className='presentacion mb-4' >
        <Card.Img src={detallerBrand} />
      </div>

      <Row className='mt-2'>
        <Col md="2"></Col>
        <Col md="8"><p style={{color:"#0071bc"}}>{texts.detaller0c}</p>
          <Card style={{border:"none"}}>
            <Card.Img src={detallerBrandDesgloce} />
          </Card>
        </Col>
        <Col md="2"></Col>
      </Row>

      <Row className='mt-2'>
        <Col md="2"></Col>
        <Col md="8"><p style={{color:"#0071bc"}}>{texts.detaller0d}</p>
          <Card style={{border:"none"}}>
            <Card.Img src={detallerPaleta} />
          </Card>
        </Col>
        <Col md="2"></Col>
      </Row>

      <Row className='mt-2'>
        <Col md="2"></Col>
        <Col md="8"><p style={{color:"#0071bc"}}>{texts.detaller0e}</p>
          <Card style={{border:"none"}}>
            <Card.Img src={detallerAplicacion} />
          </Card>
        </Col>
        <Col md="2"></Col>
      </Row>

      <Row className='mt-2'>
        <Col md="2"></Col>
        <Col md="8">
          <Card style={{border:"none"}}>
            <Card.Img src={detallerTotebagBlue} />
          </Card>
        </Col>
        <Col md="2"></Col>
      </Row>
    </>

  )
}

export default DeTaller