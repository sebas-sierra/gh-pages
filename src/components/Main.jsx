import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ClaseTres from './capitulos/ClaseTres';
import ClaseCuatro from './capitulos/ClaseCuatro';
const Main = () => {
  return (
    <Container className='main'>
        <Row>
          <Col sm={8}>
            <h1>Main</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error odio vero enim eveniet perspiciatis neque architecto a pariatur recusandae molestiae harum accusantium, minima, cumque magnam asperiores veritatis provident? Quas, dolor.</p>
            <ClaseTres/>
            <ClaseCuatro/>
          </Col>
        </Row>
    </Container>
  )
}

export default Main