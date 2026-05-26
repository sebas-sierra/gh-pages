import React, { useContext } from 'react';
import { Badge, Button, Card, Col, Row, Stack } from 'react-bootstrap';
import prode0 from '../../assets/img/portfolio/prode/prode-logo-2.png';
import prode1 from '../../assets/img/portfolio/prode/prode-3.png';
import prode2 from '../../assets/img/portfolio/prode/prode-2.png';
import { ThemeContext } from '../../context/ThemeContext';

const Prode = () => {
  const {texts} = useContext(ThemeContext)
  return (
    <>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <div className='presentacion-header'>
            <h1 className='portfolio-titulo'>{texts.prode0a}</h1>
            <Stack direction='horizontal' gap={1} className='pb-2'>
              <Badge pill bg="secondary"> ux / ui </Badge>
              <Badge pill bg="secondary">github</Badge>
              <Badge pill bg="secondary">bootstrap</Badge>
              <Badge pill bg="secondary"> coding</Badge>
            </Stack>
            <Stack direction='horizontal' gap={1}>
              <Badge pill bg="dark">javascript</Badge>
              <Badge pill bg="dark">html</Badge>
              <Badge pill bg="dark">css</Badge>
            </Stack>
          </div>
          <div className='presentacion-body'>
            <p className='portfolio-bajada'>{texts.prode0b}</p>
            {/* <Button variant="outline-primary" href='https://sebas-sierra.github.io/entrega-final/'>link al proyecto</Button> */}
          </div>
          {/* <img src={prode1} width="100%" overflow="hidden"/> */}

          <Card class='pb-3' className='mb-4'  style={{ border: 'none'}}>
            <Card.Img src={prode1} />
            <Card.ImgOverlay width='240px' style={{ marginLeft: '400px', marginTop: "280px" }}>
              <Card.Text>
                <img src={prode0} width="60%" overflow="hidden" className='mb-4 mt-4'/>
                <p className='portfolio-bajada'>App de pronósticos y competencia lúdica basada en resultados de partidos de fútbol, que combina entretenimiento, análisis deportivo y juego.</p>
                {/* <p className='portfolio-bajada'>Su función principal es:</p>
                <ul className='portfolio-bajada'>
                  <li><strong>Permitir la creación de pronósticos:</strong> el usuario selecciona resultados posibles (por ejemplo, victoria local, empate o victoria visitante).</li>
                  <li><strong>Organizar competencias o juegos de predicción:</strong> los usuarios pueden competir entre sí en grupos, ligas o torneos.</li>
                  <li><strong>Asignar puntajes según los aciertos:</strong> se otorgan puntos por cada resultado correcto, y se genera un ranking.</li>
                  <li><strong>Gestionar eventos deportivos:</strong> muestra partidos, fechas, equipos y resultados reales.</li>
                  <li><strong>Fomentar la interacción social:</strong> permite comparar pronósticos entre usuarios, compartir resultados o competir en comunidades.</li>
                </ul> */}
              </Card.Text>
              <Button variant="outline-primary" href='https://sebas-sierra.github.io/entrega-final/'>link al proyecto</Button>
            </Card.ImgOverlay>
          </Card>

        </Col>
        <Col md="2"></Col>
      </Row>

      <div className='presentacion'>
        <img src={prode2} width="100%" overflow="hidden" />
      </div>
    </>
  )
}

export default Prode