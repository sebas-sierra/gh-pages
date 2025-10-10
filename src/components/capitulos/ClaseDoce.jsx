import React from 'react';
import { Badge, Card } from 'react-bootstrap';

const ClaseDoce = () => {
  return (
    <Card>
      <Card.Header className='apuntes-react'><Badge pill bg="dark">Clase Nº 12 </Badge><h1>Firebase 1</h1></Card.Header>
      <Card.Body>
        <Card.Title>Configuracion de una base de datos en Firebase</Card.Title>
        <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae natus, autem ex voluptatum dicta unde asperiores excepturi doloribus enim cumque saepe facilis quia corporis amet aspernatur modi voluptatem dolore quibusdam.</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ClaseDoce