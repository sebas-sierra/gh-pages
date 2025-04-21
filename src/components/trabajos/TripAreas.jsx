import React, { useState } from 'react';
import { Card, Carousel, Image, Modal } from 'react-bootstrap';

import tripAreasA from '../../assets/img/portfolio/bnm/triptico-areas-0.jpg';
import tripAreasB from '../../assets/img/portfolio/bnm/triptico-areas-1.jpg';
import tripAreasC from '../../assets/img/portfolio/bnm/triptico-areas-2.jpg';
import tripAreasD from '../../assets/img/portfolio/bnm/triptico-areas-3.jpg';

const TripAreas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* triptico institucional */}
            <img src={tripAreasA} onClick={handleShow} width="100%" height="250px" overflow="hidden" />
            <Card.Text>
                <p text-indent="5em">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
            </Card.Text>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body>
                    <Carousel>
                        <Carousel.Item>
                            <Image src={tripAreasA} className="d-block w-100" />
                            
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={tripAreasB} className="d-block w-100" />
                            
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={tripAreasC} className="d-block w-100" />
                            
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={tripAreasD} className="d-block w-100" />
                            
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TripAreas