import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ClaseTres from './capitulos/ClaseTres';
import ClaseCuatro from './capitulos/ClaseCuatro';
import ClaseCinco from './capitulos/ClaseCinco';
import ClaseSeis from './capitulos/ClaseSeis';

const Main = () => {
  return (
    <Container className='main'>
        <Row>
          <Col sm={8}>
            <h1>Main</h1>
            <ClaseTres/>
            <ClaseCuatro/>
            <ClaseCinco/>
            <ClaseSeis/>
          </Col>
        </Row>
    </Container>
  )
}

export default Main