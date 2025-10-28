import React from 'react';
import VideoPlayer from '../VideoPlayer';

import { Badge, Col, Row } from 'react-bootstrap'

const Blueberries = () => {
  return (
    <>      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <div className='presentacion-header'>
            <h1 className='portfolio-titulo'>Blueberries</h1>
            <Badge pill bg="secondary"> animacion </Badge><br />
          </div>
          <div className='presentacion-body'>
            <p className='portfolio-bajada'>Trabajo de animacion para BLUEBERRIES Grow & Garden, pieza de comunicacion animada para reproducir en diferentes resoluciones (smartphone y televisor).</p>
            <p className='portfolio-bajada'>En este caso el cliente proporciono las ilustraciones, simplificando el desarrollo del proyecto en primera instancia en base a estas mismas ilustraciones se diseñaron las pantallas que formarian la animacion (storyboard).<br /> En segunda instancia, se ajustan las imagenes al formato requerido para la animacion incluyendo retoques a las imagenes originales para que el trabajo sea fluido, buscando optimizar las horas dedicadas a trabajar en los distintos softwares.<br /> Por ultimo la instancia de animacion, que tan placentera o tortuosa sea esta etapa depende exclusivamente de las etapas anteriores.</p>
          </div>

          <VideoPlayer width={960} height={540} />
        </Col>
        <Col md="2"></Col>
      </Row>
    <div className='presentacion'>  
    </div></>

  )
}

export default Blueberries