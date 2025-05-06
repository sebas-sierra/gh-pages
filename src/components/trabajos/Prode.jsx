import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Stack } from 'react-bootstrap';

const Prode = () => {
  return (
    <div className='presentacion'>
      <Stack direction='horizontal' gap={1}><Badge pill bg="secondary"> ux / ui </Badge><Badge pill bg="secondary"> coding</Badge></Stack>
      <h1 className='portfolio-titulo'>Prode</h1>
      <p className='portfolio-bajada'>Proyecto final para el curso de Javascript de CODERHOUSE. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
      <Link to='https://sebas-sierra.github.io/entrega-final/'>link al prode</Link>
    </div>
  )
}

export default Prode