import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Card, Col, Row, Nav, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contacto = () => {
  const {texts} = useContext (ThemeContext);
  const [show, setShow] = useState(false);
  return (
    <>
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered

      >
      <Modal.Body style={{textAlign: 'center', marginTop:'1rem'}}>
        <p>La dirección de mail se copio correctamente al portapapeles.</p>
      </Modal.Body>
    </Modal>

    <h4>{texts.contact}</h4>
    <Row>
        <Col sm={12} lg={4}><CopyToClipboard text="gerardosebastiansierra@gmail.com"><Card className='mb-4' bg='dark' text='light'><Card.Body onClick={() => setShow(true)}><FontAwesomeIcon icon="fa-solid fa-envelope" className='fa-5x' /><Card.Text>Gmail</Card.Text></Card.Body></Card></CopyToClipboard></Col>
        <Col sm={12} lg={4}><Nav.Link href='https://www.behance.net/sebasierra'><Card className='mb-4' bg='primary' text='light'><Card.Body><FontAwesomeIcon icon="fa-brands fa-square-behance" className='fa-5x' /><Card.Text>Behance</Card.Text></Card.Body></Card></Nav.Link></Col>
        <Col sm={12} lg={4}><Nav.Link  href='http://www.linkedin.com/in/sebastian-sierra-48796923'><Card className='mb-4' bg='light' text='dark'><Card.Body><FontAwesomeIcon icon="fa-brands fa-linkedin-in" className='fa-5x'  /><Card.Text>Linkedin</Card.Text></Card.Body></Card></Nav.Link></Col>
    </Row>
    </>
  )
}

export default Contacto