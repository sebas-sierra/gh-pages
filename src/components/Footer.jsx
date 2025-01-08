import React from 'react';
import NavBar from './NavBar';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <NavBar isInHeader = {false}/> */}
      {/* <NavBar/> */}
      <Container >
        <Row>
          <Col>
      <div className='footer-logo'><a href="">logo 1</a></div></Col></Row>
      <Row >
        <Col>
          <ul>
          <li><h5>encabezado</h5></li>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
          <li>link 4</li>
          </ul>
        </Col>
        <Col>
          <ul>
          <li><h5>encabezado</h5></li>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
          <li>link 4</li>
          </ul>
        </Col>
        <Col>
          <ul>
          <li><h5>encabezado</h5></li>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
          <li>link 4</li>
          </ul>
        </Col>
        <Col>
          <ul>
          <li><h5>encabezado</h5></li>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
          <li>link 4</li>
          </ul>
        </Col>
      </Row>
      <Row>
      <div className='footer-logos'><a href="">logo 1</a><a href="">logo 2</a><a href="">logo 3</a><a href="">logo 4</a></div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut blanditiis minus minima tempore nostrum ab natus provident sed aliquid? Vero alias nisi, voluptas amet fugiat dolores minima sequi cumque.</p>

      </Row>
      
      </Container>
    </footer>
  )
}

export default Footer