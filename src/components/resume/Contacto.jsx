import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contacto = () => {
  return (
    <>
    <h4>Contacto</h4>
    <Row>
        <Col sm={12} lg={4}><Card className='mb-4' bg='dark' text='light'><Card.Body><FontAwesomeIcon icon="fa-solid fa-envelope" className='fa-5x' /><Card.Text>Gmail</Card.Text></Card.Body></Card></Col>
        <Col sm={12} lg={4}><Card className='mb-4' bg='primary' text='light'><Card.Body><FontAwesomeIcon icon="fa-brands fa-square-behance" className='fa-5x' /><Card.Text>Behance</Card.Text></Card.Body></Card></Col>
        <Col sm={12} lg={4}><Card className='mb-4' bg='light' text='dark'><Card.Body><FontAwesomeIcon icon="fa-brands fa-linkedin-in" className='fa-5x'  /><Card.Text>Linkedin</Card.Text></Card.Body></Card></Col>
    </Row>
    </>
  )
}

export default Contacto