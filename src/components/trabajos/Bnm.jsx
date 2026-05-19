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
            <h1 className='portfolio-titulo'>{texts.bnm0a}</h1>

            <Stack direction='horizontal' gap={1}>
              <Badge pill bg="secondary"> diseño folleteria </Badge>
              <Badge pill bg="secondary"> branding </Badge>
              <Badge pill bg="secondary"> diseño institucional</Badge>
            </Stack>
          </div>

          <div className='presentacion-body'>
            <p className='portfolio-bajada'>{texts.bnm0b}</p>
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