import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import NavBar from './NavBar';
import { Badge, Col, Card, Container, Modal, Row } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import detallerFooter from '../assets/img/imagenes/de-taller-trasparente.png';

const Footer = () => {
  const {texts} = useContext (ThemeContext);
  const [show, setShow] = useState(false);
  return (
    <footer className='footer'>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered

      >
        <Modal.Body style={{textAlign: 'center', marginTop:'1rem'}}>
          <p>{texts.footertxt5}</p>
        </Modal.Body>
      </Modal>
      {/* <NavBar isInHeader = {false}/> */}
      {/* <NavBar/> */}
      <Container >
        {/* <Row>
          <Col>
      <div className='footer-logo'><a href="">logo 1</a></div></Col></Row> */}
      <Row >
        <Col md={6}>
          <a href='/gh-pages/#/capitulos/prod'><img src={detallerFooter} alt="de-taller" style={{width:"80%"}}/></a>
        </Col>

        <Col md={3}>
          <ul>
            <li><h6 className="footer-header">{texts.footertxt1}</h6></li>
            <li className="footer-link"><a href='/gh-pages/#/trabajos/editorial'>Frontend</a></li>
            <li className="footer-link"><a href='/gh-pages/#/trabajos/waterclor'>Etiquetas</a></li>
            <li className="footer-link"><a href='/gh-pages/#/trabajos/prode'>UX / UI</a></li>
          </ul>
        </Col>

        <Col md={3}>
          <ul>
            <li><h6 className="footer-header">{texts.footertxt2}</h6> </li>
            <li className="footer-link"><a href='http://www.linkedin.com/in/sebastian-sierra-48796923'>LinkedIn</a></li>
            <li className="footer-link"><a href='https://www.behance.net/sebasierra'>Behance</a></li>
            <CopyToClipboard text="gerardosebastiansierra@gmail.com"><li className="footer-link" onClick={() => setShow(true)}>
            <FontAwesomeIcon className="footer-icon" icon="fa-regular fa-envelope" />gerardosebastiansierra@gmail.com</li></CopyToClipboard>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col md={6}></Col>
        <Col md={6}>
          <div className='footer-logos'>
            <hr />
            <p style={{paddingTop:'12px', fontSize:'14px', color:'#7e7f80'}}>{texts.footertxt3}</p>
            <div className='switch-logos' >
              <a href="" className='react'></a>
              <a href="" className='html'></a>
              <a href="" className='bustrap'></a>
              <a href="" className='css'></a>
              <a href="" className='sass'></a>
              <a href="" className='fontawesome'></a>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      
      <p style={{textAlign:'left', paddingTop:'12px', fontSize:'14px', color:'#7e7f80'}}>{texts.footertxt4}</p>
      
      </Container>
    </footer>
  )
}

export default Footer