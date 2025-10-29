import React from 'react';
import NavBar from './NavBar';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import detallerFooter from '../assets/img/imagenes/de-taller-trasparente.png'
const Footer = () => {
  return (
    <footer className='footer'>
      {/* <NavBar isInHeader = {false}/> */}
      {/* <NavBar/> */}
      <Container >
        {/* <Row>
          <Col>
      <div className='footer-logo'><a href="">logo 1</a></div></Col></Row> */}
      <Row >
        
        {/* <Col>
          <ul>
          <li><h6 className="footer-header">Apuntes</h6></li>
          <li className="footer-link">link 1</li>
          <li className="footer-link">link 2</li>
          <li className="footer-link">link 3</li>
          <li className="footer-link">link 4</li>
          </ul>
        </Col> */}
        <Col md={6}>
          <a href='/gh-pages/#/capitulos/prod'><img src={detallerFooter} alt="de-taller" style={{width:"80%"}}/></a>
        </Col>
        <Col col={3}>
          <ul>
            <li><h6 className="footer-header">Proyectos Recientes</h6></li>
            <li className="footer-link"><a href='/gh-pages/#/trabajos/editorial'>Frontend</a></li>
            <li className="footer-link"><a href='/gh-pages/#/trabajos/waterclor'>Etiquetas</a></li>
            <li className="footer-link"><a href='/gh-pages/#/trabajos/prode'>UX / UI</a></li>
          </ul>
        </Col>
        <Col col={3}>
          <ul>
            <li><h6 className="footer-header">Contacto</h6></li>
            <li className="footer-link"><a href='http://www.linkedin.com/in/sebastian-sierra-48796923'>LinkedIn</a></li>
            <li className="footer-link"><a href='https://www.behance.net/sebasierra'>Behance</a></li>
            <li className="footer-link"><FontAwesomeIcon className="footer-icon" icon="fa-regular fa-envelope" />gerardosebastiansierra@gmail.com</li>
          </ul>
        </Col>
      </Row>
      <Row>
     
      <div className='footer-logos'> <hr />
        <p>Este sitio fue construido usando las siguientes tecnologias:</p>
        <div className='switch-logos' >
          <a href="" className='react'></a>
          <a href="" className='html'></a>
          <a href="" className='bustrap'></a>
          <a href="" className='css'></a>
          <a href="" className='sass'></a>
          <a href="" className='fontawesome'></a>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut blanditiis minus minima tempore nostrum ab natus provident sed aliquid? Vero alias nisi, voluptas amet fugiat dolores minima sequi cumque.</p>

      </Row>
      
      </Container>
    </footer>
  )
}

export default Footer