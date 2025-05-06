import React from 'react';
import { Badge, Card, Stack } from 'react-bootstrap';

import TripRepo from './TripRepo';
import TripInsti from './TripInsti';
import TripAreas from './TripAreas';

const Bnm = () => {
  return (
    <div className='presentacion'>
      <Stack direction='horizontal' gap={1}><Badge pill bg="secondary"> diseño folleteria </Badge><Badge pill bg="secondary"> branding </Badge><Badge pill bg="secondary"> diseño institucional</Badge></Stack>
      <h1 className='portfolio-titulo'>Biblioteca Nacional de Maestros</h1>
      <p className='portfolio-bajada'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
      <Card>
        <Card.Header>BNM</Card.Header>
        <Card.Body>
          <TripRepo />
          <TripInsti />
          <TripAreas />
        </Card.Body>
      </Card>
    </div>

  )
}

export default Bnm