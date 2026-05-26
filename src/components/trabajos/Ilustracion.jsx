import React, { useState, useContext } from 'react'
import cartuchos from '../../assets/img/portfolio/ilustracion/cartuchos-4.png';
import { Badge, Carousel, Col, Image, Modal, Row, Stack } from 'react-bootstrap';

import cartuchosA from '../../assets/img/portfolio/ilustracion/cartuchos-3.png';
import cartuchosB from '../../assets/img/portfolio/ilustracion/cartuchos-2.png';
import cartuchosC from '../../assets/img/portfolio/ilustracion/cartuchos-1.png';
import cartuchosD from '../../assets/img/portfolio/ilustracion/cartuchos-0.png';

import surocultoA from '../../assets/img/portfolio/ilustracion/sur-oculto.png';
import surocultoB from '../../assets/img/portfolio/ilustracion/sur-oculto-mockup-1.png';
import surocultoC from '../../assets/img/portfolio/ilustracion/sur-oculto-mockup-2.png';
import surocultoD from '../../assets/img/portfolio/ilustracion/sur-oculto-mockup-3.png';

import skate from '../../assets/img/portfolio/ilustracion/montania-skate.png';
import { ThemeContext } from '../../context/ThemeContext';

const Ilustracion = () => {
  const { texts } = useContext(ThemeContext)
  const [ show, setShow ] = useState(false);
  const [ showut, setShowut ] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseut = () => setShowut(false);
  const handleShow = () => setShow(true);
  const handleShowut = () => setShowut(true);

  return (
    <>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <div className='presentacion-header'>
            <h1 className='portfolio-titulo'>{texts.ilustracion0a}</h1>
            <Stack direction='horizontal' gap={1}><Badge pill bg="secondary"> ilustracion digital </Badge><Badge pill bg="secondary"> photoshop </Badge><Badge pill bg="secondary"> boceto a lapiz </Badge></Stack>
          </div>
          <div className='presentacion-body'>
            <p className='portfolio-bajada'>{texts.ilustracion1a}</p>
          </div>
        </Col>
        <Col md="2"></Col>
      </Row>
      
      <Row>
        <Col md="7">
          <img src={surocultoA} onClick={handleShow} width="100%" overflow="hidden" alt=" " />
        </Col>
        <Col md="4">
          <div style={{ paddingTop: "200px" }}>
            <h2 className='portfolio-titulo' >Sur Oculto</h2>
            <hr />
            <Stack direction="horizontal" gap={2}>
              <Badge pill bg="dark"> ilustracion digital </Badge>
              <Badge pill bg="dark"> photoshop </Badge>
            </Stack><br />
            <p>Esta ilustracion surgio como idea de poster para la banda cordobeza SUR OCULTO. Su sonido que, en mi opinion rescata cositas de diversos generos como el hardcore, el jazz y el funk e invitan a la exploración sensorial y la introspección. Un tesoro oculto entre tanta oferta musical.</p>
          </div>
        </Col>
        <Col md="1"></Col>
      </Row>
      
      <Row>
        <Col md="1"></Col>
        <Col md="4">
          <div style={{ paddingTop: "200px" }}>
            <h2 className='portfolio-titulo text-end'>Ultimos Cartuchos</h2>
            <hr />
            <Stack direction="horizontal" gap={2} className="hstack-reverse">
              <Badge pill bg="dark"> boceto a lapiz </Badge>
              <Badge pill bg="dark"> ilustracion digital </Badge>
              <Badge pill bg="dark"> photoshop </Badge>
            </Stack><br />
            <p className='text-end'>Reir, equivocarse y aprender. Una de Libi y una de Culi. La Radio fue una gran compañia a lo largo de mi vida y descubrir UC me demostro siempre hay lugar para la innovación lúdica, tomandose las cosas de forma profesional sin resignar imaginación ni creatividad.</p>
          </div>
        </Col>
        <Col md="7">
          <img src={cartuchos} onClick={handleShowut} alt='' style={{ width: "100%" }} />
        </Col>
      </Row>

      <Row>
        <Col md="7">
          <img src={skate} alt='' style={{ width: "100%" }} />
        </Col>
        <Col md="4">
          <div style={{ paddingTop: "200px" }}>
            <h2 className='portfolio-titulo'>Skate</h2>
            <hr />
            <Stack direction="horizontal" gap={2}>
              <Badge pill bg="dark"> boceto a lapiz </Badge>
              <Badge pill bg="dark"> acrilico en tabla de skate </Badge>
            </Stack><br />
            <p>Los paisajes del sur argentino, un vieja tabla de skate reciclada, el dibujo como medio de expresion. Elementos/ herramientas que definen identidad y formas de ver el mundo. </p>
          </div>
        </Col>
        <Col md="1"></Col>
      </Row>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body >
          <Carousel>

            <Carousel.Item>
              <Image src={surocultoC} className="d-block w-100" />
            </Carousel.Item>

            <Carousel.Item>
              <Image src={surocultoB} className="d-block w-100" />
            </Carousel.Item>
            
            <Carousel.Item>
              <Image src={surocultoD} className="d-block w-100" />
            </Carousel.Item>
            
          </Carousel>
        </Modal.Body>
      </Modal>

      <Modal size="lg" show={showut} onHide={handleCloseut}>
        <Modal.Body >
          <Carousel>
            <Carousel.Item>
              <Image src={cartuchosA} className="d-block w-100" />
            </Carousel.Item>

            <Carousel.Item>
              <Image src={cartuchosB} className="d-block w-100" />
            </Carousel.Item>

            <Carousel.Item>
              <Image src={cartuchosC} className="d-block w-100" />
            </Carousel.Item>

            <Carousel.Item>
              <Image src={cartuchosD} className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Ilustracion