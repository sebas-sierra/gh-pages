import React from 'react';
import VideoPlayer from '../VideoPlayer';
import { Col, Row } from 'react-bootstrap'

const Blueberries = () => {
  return (
    <Row className="justify-content-md-center">
      <Col md={1}></Col>
      <Col md="auto">
        <h1>Blueberries</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
        <VideoPlayer width={960} height={540}/>
        </Col>
        <Col md={1}></Col>
    </Row>
  )
}

export default Blueberries