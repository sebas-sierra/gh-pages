import React, { useState } from 'react';
import { Card, Image, Carousel, Modal } from 'react-bootstrap';

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
            <img src={tripInstiA} onClick={handleShow} width="100%" height="250px" overflow="hidden" />
            <Card.Text>
                <p text-indent="5em">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
            </Card.Text>
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