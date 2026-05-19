import React, { useContext, useState, useEffect } from 'react';
import { Row, Col, Button, Card, CardText, Carousel, Image, Modal, Spinner } from 'react-bootstrap';

import tripAreasA from '../../assets/img/portfolio/bnm/triptico-areas-0.jpg';
import tripAreasB from '../../assets/img/portfolio/bnm/triptico-areas-1.jpg';
import tripAreasC from '../../assets/img/portfolio/bnm/triptico-areas-2.jpg';
import tripAreasD from '../../assets/img/portfolio/bnm/triptico-areas-3.jpg';
import { ThemeContext } from '../../context/ThemeContext';

const TripAreas = () => {
    const {texts} = useContext(ThemeContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
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
                <Card onClick={handleShow} className='mb-5'>
                    <Card.Body>
                        <Card.Title><h3>{texts.bnm3a}</h3></Card.Title>
                        <Card.Text>{texts.bnm3b}</Card.Text>
                        <Button variant="primary"> ver mas</Button>
                    </Card.Body>
                    <Card.Img variant="bottom" src={tripAreasA}  />
                </Card>
                           
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
            </Col>
            <Col md={2}></Col>
        </Row>
        </>
    )
}

export default TripAreas