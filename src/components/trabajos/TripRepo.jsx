import React, { useState } from 'react';
import { Button, Card, Carousel, Image, Modal } from 'react-bootstrap'

import tripRepoA from '../../assets/img/portfolio/bnm/triptico-repo-0.png';
import tripRepoB from '../../assets/img/portfolio/bnm/triptico-repo-1.png';
import tripRepoC from '../../assets/img/portfolio/bnm/triptico-repo-2.png';
import tripRepoD from '../../assets/img/portfolio/bnm/triptico-repo-3.png';

const TripRepoA = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            {/* triptico institucional */}
            <Card onClick={handleShow} className='mb-4'>
                <Card.Img src={tripRepoA} />
                <Card.ImgOverlay width='250px' style={{marginRight: '300px'}}>
                    <Card.Title><h3>Triptico presentacion Repositorio Institucional</h3></Card.Title>
                    <Card.Text>Minus itaque optio, nostrum quam autem <br/>cum quis nesciunt sint odio eum aperiam distinctio dicta.</Card.Text>
                    <Button variant="primary"> ver mas</Button>
               </Card.ImgOverlay>
            </Card>
           
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body>
                    <Carousel>
                        <Carousel.Item>
                            <Image src={tripRepoB} className="d-block w-100" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={tripRepoC} className="d-block w-100" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={tripRepoD} className="d-block w-100" />
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TripRepoA