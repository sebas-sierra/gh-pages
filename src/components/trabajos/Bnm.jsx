import React from 'react';
import { Badge, Stack } from 'react-bootstrap';

import TripRepo from './TripRepo';
import TripInsti from './TripInsti';
import TripAreas from './TripAreas';

const Bnm = () => {
  return (
    <div className='presentacion'>
      <div className='presentacion-header'>
        <h1 className='portfolio-titulo'>Biblioteca Nacional<br/>de Maestros</h1>
        <Stack  direction='horizontal' gap={1}><Badge pill bg="secondary"> diseño folleteria </Badge><Badge pill bg="secondary"> branding </Badge><Badge pill bg="secondary"> diseño institucional</Badge></Stack>
      </div>
      <div className='presentacion-body'>
        <p className='portfolio-bajada'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
      </div>
      
      
      
      <TripRepo />
      <TripInsti />
      <TripAreas />
    </div>
  )
}

export default Bnm