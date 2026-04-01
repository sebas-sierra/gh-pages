import React, { useContext, useEffect, useState } from 'react';
import { Badge, Col, Row, Stack, Spinner } from 'react-bootstrap';
import { ThemeContext } from '../../context/ThemeContext'

import TripRepo from './TripRepo';
import TripInsti from './TripInsti';
import TripAreas from './TripAreas';

const Bnm = () => {
  const { texts } = useContext(ThemeContext);
  // const [ loading, setLoading ] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000)
  // }, []);


  // if (loading) {
  //   return (
  //     <>
  //       <Row className="justify-content-md-center">
  //         <Col md={1}></Col>
  //         <Col md={8} className="text-center" ><Spinner animation="grow" variant="secondary" /></Col>
  //         <Col md={1}></Col>
  //       </Row>
  //     </>
  //   )
  // }


  return (
    <>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <div className='presentacion-header'>
            <h1 className='portfolio-titulo'>Biblioteca Nacional<br />de Maestros {texts.edp0}</h1>
            <Stack direction='horizontal' gap={1}><Badge pill bg="secondary"> diseño folleteria </Badge><Badge pill bg="secondary"> branding </Badge><Badge pill bg="secondary"> diseño institucional</Badge></Stack>
          </div>
          <div className='presentacion-body'>
            <p className='portfolio-bajada'>Pequeño muestrario de piezas producidas durante el período en que me desempeñe como diseñador gráfico para la Biblioteca Nacional de Maestros.</p>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
      
      <TripRepo />
      <TripInsti />
      <TripAreas />
      
    </>
  )
}

export default Bnm