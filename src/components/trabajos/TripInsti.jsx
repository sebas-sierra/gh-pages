import React, { useState } from 'react';
import { Button, Card, Image, Carousel, Modal } from 'react-bootstrap';

import tripInstiA from '../../assets/img/portfolio/bnm/triptico-insti-0.jpg';
import tripInstiB from '../../assets/img/portfolio/bnm/triptico-insti-1.jpg';
import tripInstiC from '../../assets/img/portfolio/bnm/triptico-insti-2.jpg';

const TripInsti = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* triptico institucional */}
            <Card onClick={handleShow} class='pb-3'>
                <Card.Img src={tripInstiA} />
                <Card.ImgOverlay width='250px' style={{marginRight: '300px'}}>
                    <Card.Title><h3>Triptico informativo servicios BNM</h3></Card.Title>
                    <Card.Text>Minus itaque optio, nostrum quam autem <br/> cum quis nesciunt sint odio eum aperiam distinctio dicta.</Card.Text>
                    <Button variant="primary"> ver mas</Button>
               </Card.ImgOverlay>
            </Card>
            
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body>
                    <Carousel>
                        <Carousel.Item>
                            <Image src={tripInstiA} className="d-block w-100" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={tripInstiB} className="d-block w-100" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={tripInstiC} className="d-block w-100" />
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TripInsti