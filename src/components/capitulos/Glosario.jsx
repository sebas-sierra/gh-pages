import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Glosario = () => {
  return (
    <Col sm={8}>
    <Card>
      <Card.Header>Glosario</Card.Header>
      <Card.Body>
        <ul>
            <li>POV: POV o Point of view, en español significa Punto de vista. En UX sirve para obtener de forma concisa el qué, para quién y por qué estamos creando nuestro producto o servicio.<br/>
Si podemos entender realmente la problemática de nuestros usuarios podremos generar una solución adecuada, focalizada y con valor agregado</li>
            <li>MVP: Viene de las palabras en inglés: “Minimum Viable Product”, esdecir, aquel producto mínimo viable que te permita validar por lo menos una parte de tu negocio. Este será el primer prototipo que llevarás al mercado para encontrar las primeras reacciones de tus clientes. Construir un MVP significa que uno quiere aprender algo. Viene de las palabras en inglés: “Minimum Viable Product”, es decir, aquel producto mínimo viable que te permita validar por lo menos una parte de tu negocio. Este será el primer prototipo que llevarás al mercado para encontrar las primeras reacciones de tus clientes. Construir un MVP significa que uno desea aprender sobre algo.</li>
            <li></li>
        </ul></Card.Body>
        </Card>
    </Col>
  )
}

export default Glosario