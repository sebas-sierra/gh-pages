import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ClaseTres from './capitulos/ClaseTres';
import ClaseCuatro from './capitulos/ClaseCuatro';
import ClaseCinco from './capitulos/ClaseCinco';
import ClaseSeis from './capitulos/ClaseSeis';
import ClaseSiete from './capitulos/ClaseSiete';
import ClaseOcho from './capitulos/ClaseOcho';
// import ClaseNueve from './capitulos/ClaseNueve';
import { Routes, Route } from 'react-router-dom'

const Main = () => {

  const onAdd = (cantidad) => {
    console.log('Funciona' + cantidad + 'unidades');
  }


  return (
    <Container className='main'>
        <Row>
          <Col sm={8}>
            <h1>Main</h1>
            <Routes>
              <Route path='/capitulos/clasetres' element={<ClaseTres/>} />
              <Route path='/capitulos/clasecuatro' element={<ClaseCuatro/>} />
              <Route path='/capitulos/clasecinco' element={<ClaseCinco/>} stock={10} onAdd={onAdd} />
              <Route path='/capitulos/claseseis/productos' element={<ClaseSeis/>} />
              <Route path='/capitulos/clasesiete' element={<ClaseSiete/>} />
              <Route path='/capitulos/claseocho' element={<ClaseOcho/>} />
              {/* <Route path='capitulos/clasenueve' element={<ClaseNueve/>} /> */}
            </Routes>
          </Col>
        </Row>
    </Container>
  )
}

export default Main