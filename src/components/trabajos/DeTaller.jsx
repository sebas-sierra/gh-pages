import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap'
import detaller from '../../assets/img/portfolio/de-taller/de-taller-h.png';

const DeTaller = () => {
  return (
    <div className='presentacion'>
      <h1 className='portfolio-titulo'>De-Taller</h1>
      <Badge pill bg="secondary"> branding </Badge><br/>
      <p className='portfolio-bajada'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p><br/>
      
      <img src={detaller} alt='' style={{width:"100%"}}/><br/><br/>
      
      <Link to={'/capitulos/prod'}>Tiendita De-Taller</Link>
    </div>
  )
}

export default DeTaller