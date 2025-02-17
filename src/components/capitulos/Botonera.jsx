import React from 'react';
import { Button, Col, Row } from 'react-bootstrap'

const Botonera = () => {
  return (
    <Row>
        <Col></Col>
        <Col xs={10} md={8} className='align-content'><Button>Publicacion anotada</Button> <Button>Publicacion original</Button></Col>
        <Col></Col>
    </Row>
  )
}

export default Botonera