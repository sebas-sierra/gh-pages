import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClaseUno = () => {
  return (
    <Col sm={8}>
        <Card className="mb-2">
            <Card.Header>Clase 1</Card.Header>
            <Card.Body>
              <p>Bootstrap no es un Framework, sino una Libreria. Esto es lo que lo diferencia de Angular o NextJs que es un framework que usa la libreria de ReactJs, por ejemplo puedo tener un proyecto de JS vanilla e instalarle ReactJs.</p>
            <Card.Title>Add code snippets in HTML</Card.Title>
            <code>
            &lt;strong&gt;Title:&lt;/strong&gt;
            &lt;p&gt;Add line numbers&lt;/p&gt;
            </code><br /><br />
            <Card.Title>Repaso</Card.Title>
            <ul>
              <li>Diferencias entre var - let - const</li>
              <li>Valores primitivos (numeros y strings) VS valores no primitivos (arrays y objetos)</li>
              <li>Arrow functions</li>
              <li>Diferencia en el uso de Concatenacion de strings VS Template Literals</li>
              <li>Metodo de Array SPREAD () y REST</li>
              <li>Operadores Ternarios / Condicional if - if else</li>
              <li>Destructuring</li>
              <li>Metodos de Array</li>
            </ul>
            <Card.Title>Recursos</Card.Title>
            <ul>
              <li>https://moqups.com/es/templates/wireframes-mockups/</li>
              <Link to='https://moqups.com/es/templates/wireframes-mockups/'>Mockups</Link>
            </ul>
            </Card.Body>

        </Card>
    </Col>
  )
}

export default ClaseUno