import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, Image, Carousel, Modal, Spinner } from 'react-bootstrap';

import tripInstiA from '../../assets/img/portfolio/bnm/triptico-insti-0.jpg';
import tripInstiB from '../../assets/img/portfolio/bnm/triptico-insti-1.jpg';
import tripInstiC from '../../assets/img/portfolio/bnm/triptico-insti-2.jpg';

const TripInsti = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);


    if (loading) {
        return (
            <>
                <Row className="justify-content-md-center" style={{ marginBottom: '150px' }}>
                    <Col md={1}></Col>
                    <Col md={8} className="text-center" ><Spinner animation="grow" variant="secondary" /></Col>
                    <Col md={1}></Col>
                </Row>
            </>
        )
    }

    return (
        <>
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
                {/* triptico institucional */}
                <Card onClick={handleShow} className='mb-4'>
                    <Card.Img src={tripInstiA} />
                    <Card.ImgOverlay width='250px' style={{ marginRight: '300px' }}>
                        <Card.Title><h3>Triptico informativo servicios BNM</h3></Card.Title>
                        <Card.Text>Minus itaque optio, nostrum quam autem <br /> cum quis nesciunt sint odio eum aperiam distinctio dicta.</Card.Text>
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
            </Col>
            <Col md={2}></Col>
        </Row>
        </>
    )
}

export default TripInsti