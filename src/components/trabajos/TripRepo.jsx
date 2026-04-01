import React, { useState, useEffect } from 'react';
import { Button, Card, Carousel, Image, Modal, Row, Spinner, Col } from 'react-bootstrap'

import tripRepoA from '../../assets/img/portfolio/bnm/triptico-repo-0.png';
import tripRepoB from '../../assets/img/portfolio/bnm/triptico-repo-1.png';
import tripRepoC from '../../assets/img/portfolio/bnm/triptico-repo-2.png';
import tripRepoD from '../../assets/img/portfolio/bnm/triptico-repo-3.png';

const TripRepoA = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500)
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
                <Card onClick={handleShow} className='mb-4'>
                    <Card.Img src={tripRepoA} />
                    <Card.ImgOverlay width='250px' style={{ marginRight: '300px' }}>
                        <Card.Title><h3>Triptico presentacion Repositorio Institucional</h3></Card.Title>
                        <Card.Text>Minus itaque optio, nostrum quam autem <br />cum quis nesciunt sint odio eum aperiam distinctio dicta.</Card.Text>
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
            </Col>
            <Col md={2}></Col>
        </Row>
        </>
    )
}

export default TripRepoA