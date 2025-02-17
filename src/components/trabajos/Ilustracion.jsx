import React, { useState } from 'react'
import cartuchos from '../../assets/img/portfolio/cartuchos-3.png';
import { Button, Card, Carousel, Image, Modal, Nav } from 'react-bootstrap'
import cartuchosA from '../../assets/img/portfolio/cartuchos-3.png';
import cartuchosB from '../../assets/img/portfolio/cartuchos-2.png';
import cartuchosC from '../../assets/img/portfolio/cartuchos-1.png';
import cartuchosD from '../../assets/img/portfolio/cartuchos-0.png';

const Ilustracion = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <h1>Ilustración</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
      
    <Card>
      <Card.Header>Ilustración</Card.Header>
      <Card.Body>
        <img src={cartuchos} onClick={handleShow} width="100%" height="250px" overflow="hidden"/>
        <Modal show={show} onHide={handleClose}>
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
        <Card.Text>
        <p text-indent= "5em">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Ilustracion