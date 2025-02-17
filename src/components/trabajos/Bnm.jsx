import React from 'react';
import { Card } from 'react-bootstrap';

import TripRepo from './TripRepo';
import TripInsti from './TripInsti';
import TripAreas from './TripAreas';

const Bnm = () => {
  return (
    <>
      <h1>BNM / Biblioteca Nacional de Maestros</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
      <Card>
        <Card.Header>BNM</Card.Header>
        <Card.Body>
          <TripRepo />
          <TripInsti />
          <TripAreas />
        </Card.Body>
      </Card>
    </>

  )
}

export default Bnm