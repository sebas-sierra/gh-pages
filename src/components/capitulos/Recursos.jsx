import React from 'react';
import { Card, Col,  Button, Row  } from 'react-bootstrap'

const Recursos = () => {
  return (
    <Row>
      <Col md="2"></Col>
      <Col md="8">
        <Card>
          <Card.Header>
            <h1>Recursos</h1>
          </Card.Header>

          <Card.Body>
            <Card.Title>GRAPHICSA</Card.Title>
            <Card.Text>
              <ul>
                <li>web: <a href="https://graphicsa.com.ar/">graphicsa.com.ar</a></li>
                <li>direccion: Colectora Oeste 696 (1619). Garín, Pcia. Buenos Aires</li>
                <li>e-mail: ventas@graphicsa.com.ar</li>
                <li>tel: +54 9 11 3275-9323</li>
              </ul>
            </Card.Text>

            <Card.Title>ROTULARTE</Card.Title>
            <Card.Text>
              <ul>
                <li>web: <a href="https://www.rotularte.com.ar/">www.rotularte.com.ar</a></li>
                <li>direccion: Céspedes 3215. Capital Federal, Buenos Aires - Argentina</li>
                <li>e-mail: - - - - - - -</li>
                <li>tel: (011) 4552-1185</li>
              </ul>

            </Card.Text>

            <Card.Title>IMPRESUR</Card.Title>
            <Card.Text>
              <ul>
                <li>web: <a href="https://impresur.com.ar/">impresur.com.ar</a></li>
                <li>direccion: Colectora Este Ramal Pilar 4343 Area de Promoción. El Triángulo, Buenos Aires.</li>
                <li>e-mail: ventas@impresur.com.ar</li>
                <li>tel: (+54 9) 11 2169-2042</li>
              </ul>
            </Card.Text>

          </Card.Body>
        </Card>
      </Col>
      <Col md="2"></Col>
    </Row>

    
  )
}

export default Recursos