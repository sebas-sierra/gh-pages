import React, { useState } from 'react';
import { Card, Image, Modal, Carousel } from 'react-bootstrap'

import tripRepoA from '../../assets/img/portfolio/bnm/triptico-repo-0.png';
import tripRepoB from '../../assets/img/portfolio/bnm/triptico-repo-1.png';
import tripRepoC from '../../assets/img/portfolio/bnm/triptico-repo-2.png';

const TripRepoA = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* triptico institucional */}
            <img src={tripRepoA} onClick={handleShow} width="100%" height="250px" overflow="hidden" />
            <Card.Text>
                <p text-indent="5em">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque optio, nostrum quam autem cum quis nesciunt sint odio eum aperiam distinctio dicta. Consequuntur alias earum veniam voluptatibus adipisci facilis.</p>
            </Card.Text>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body>
                    <Carousel>
                        <Carousel.Item>
                            <Image src={tripRepoA} className="d-block w-100" />
                            
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={tripRepoB} className="d-block w-100" />
                            
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={tripRepoC} className="d-block w-100" />
                            
                        </Carousel.Item>

                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TripRepoA