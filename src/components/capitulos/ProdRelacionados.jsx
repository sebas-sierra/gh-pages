import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ProdRelacionados = () => {
  return (
    <div>
        <h6>ProdRelacionados</h6>
        <Row>
              <Col md={4}>
                  <Card>
                      <Card.Img></Card.Img>
                      <Card.Body>
                          <Card.Title>Prod.title</Card.Title>
                          <Card.Text>Prod.description</Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
              <Col md={4}>
                  <Card>
                      <Card.Img></Card.Img>
                      <Card.Body>
                          <Card.Title>Prod.title</Card.Title>
                          <Card.Text>Prod.description</Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
              <Col md={4}>
                  <Card>
                      <Card.Img></Card.Img>
                      <Card.Body>
                          <Card.Title>Prod.title</Card.Title>
                          <Card.Text>Prod.description</Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
        </Row>

    </div>
  )
}

export default ProdRelacionados