import React, { useState } from 'react'
import cartuchos from '../../assets/img/portfolio/ilustracion/cartuchos-4.png';
import { Button, Card, Carousel, Image, Modal, Row, Nav } from 'react-bootstrap'
import cartuchosA from '../../assets/img/portfolio/ilustracion/cartuchos-3.png';
import cartuchosB from '../../assets/img/portfolio/ilustracion/cartuchos-2.png';
import cartuchosC from '../../assets/img/portfolio/ilustracion/cartuchos-1.png';
import cartuchosD from '../../assets/img/portfolio/ilustracion/cartuchos-0.png';

import surocultoA from '../../assets/img/portfolio/ilustracion/sur-oculto.png';
import surocultoB from '../../assets/img/portfolio/ilustracion/sur-oculto-mockup-1.png';
import surocultoC from '../../assets/img/portfolio/ilustracion/sur-oculto-mockup-2.png';

import skate from '../../assets/img/portfolio/ilustracion/montania-skate.png';

import { Badge, Stack } from 'react-bootstrap'
const Ilustracion = () => {
  const [show, setShow] = useState(false);
  const [showut, setShowut] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseut = () => setShowut(false);
  const handleShow = () => setShow(true);
  const handleShowut = () => setShowut(true);

  return (
    <div className='presentacion'>
      <h1 className='portfolio-titulo'>Ilustración</h1>
      <p className='portfolio-bajada'>En esta seccion reuni una serie de dibujos/ ilustraciones sobre cosas de las que me declaro fan. Si bien no son trabajos realizados por comision son reflejo del ideas disparadas por consumos culturales que captaron mi atencion.</p>
      <Row>
        <div class="w3-row">
          <div class="w3-col m8">
            <img src={surocultoA} onClick={handleShow} width="100%" overflow="hidden"/>
          </div>
          <div class="w3-col m4" style={{paddingTop: "200px"}}>
            <h2 className='portfolio-titulo' >Sur Oculto</h2>
            <hr />
            <Stack direction="horizontal" gap={2}>
              <Badge pill bg="dark"> ilustracion digital </Badge>
              <Badge pill bg="dark"> photoshop </Badge>
            </Stack><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, hic? Enim, corporis ut quibusdam eum, accusantium aliquid quidem temporibus corrupti, perferendis id dolore hic autem itaque? Praesentium ratione veritatis dolor.</p>
          </div>
        </div>
      </Row>

    <Row>
      <div class="w3-row">
        <div class="w3-col m5" style={{paddingTop: "200px"}}>
          <h2  className='portfolio-titulo text-end'>Ultimos Cartuchos</h2>
          <hr />
          <Stack direction="horizontal" gap={2} className="hstack-reverse">
            <Badge pill bg="dark"> boceto a lapiz </Badge>
            <Badge pill bg="dark"> ilustracion digital </Badge>
            <Badge pill bg="dark"> photoshop </Badge>
          </Stack><br />
          <p className='text-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, hic? Enim, corporis ut quibusdam eum, accusantium aliquid quidem temporibus corrupti, perferendis id dolore hic autem itaque? Praesentium ratione veritatis dolor.</p>
        </div>
        <div class="w3-col m7">
          <img src={cartuchos} onClick={handleShowut} alt='' style={{width:"100%"}}/>
        </div>
      </div>
    </Row>

    <Row>
      <div class="w3-row">
        <div class="w3-col m7">
          <img src={skate} alt='' style={{width:"100%"}}/>
        </div>
        <div class="w3-col m5" style={{paddingTop: "200px"}}>
          <h2  className='portfolio-titulo'>Skate</h2>
          <hr />
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="dark"> boceto a lapiz </Badge>
            <Badge pill bg="dark"> ilustracion digital </Badge>
            <Badge pill bg="dark"> photoshop </Badge>
          </Stack><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, hic? Enim, corporis ut quibusdam eum, accusantium aliquid quidem temporibus corrupti, perferendis id dolore hic autem itaque? Praesentium ratione veritatis dolor.</p>
        </div>
      </div>
    </Row>

    
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Body >
            <Carousel>
              <Carousel.Item>
                <Image src={surocultoB} className="d-block w-100" />
              </Carousel.Item>

              <Carousel.Item>
                <Image src={surocultoC} className="d-block w-100" />
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>

        <Modal size="lg" show={showut} onHide={handleCloseut}>
          <Modal.Body >
            <Carousel>
              <Carousel.Item>
                <Image src={cartuchosA} className="d-block w-100" />
                <Carousel.Caption>
                    <h3>dvfvsz</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image src={cartuchosB} className="d-block w-100" />
                <Carousel.Caption>
                    <h3>dfvdfv</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image src={cartuchosC} className="d-block w-100" />
                <Carousel.Caption>
                    <h3>vfvfd</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Image src={cartuchosD} className="d-block w-100" />
                <Carousel.Caption>
                    <h3>bkglbg</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default Ilustracion