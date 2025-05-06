import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Badge, Card, Col, Image, ListGroup, Row, Spinner } from 'react-bootstrap'
import Bio from './resume/Bio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import illustrator from '../assets/img/logos-software/Adobe_Illustrator_CC_icon.svg';
import photoshop from '../assets/img/logos-software/Adobe_Photoshop_CC_icon.svg';
import after from '../assets/img/logos-software/Adobe_After_Effects_CC_icon.svg';
import indesign from '../assets/img/logos-software/Adobe_InDesign_CC_icon.svg';
import adobexd from '../assets/img/logos-software/Adobe_XD_CC_icon.svg';
import figma from '../assets/img/logos-software/Figma-logo.svg';
import puertagif from '../assets/img/imagenes/paralaweb 2.gif'
import Trabajos from './resume/Trabajos';

const Resume = () => {
  const {texts} = useContext (ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, []);

  if (loading) {
    return (
      <>
        <Row className="justify-content-md-center">
          <Col md={1}></Col>
          <Col md={8} className="text-center" ><Spinner animation="grow" variant="secondary" /></Col>
          <Col md={1}></Col>
        </Row>
      </>
    )
  }
  
  return (
    <Row>
      <Col md={1}></Col>
      <Col>
      <ListGroup className='list-group-cv'>
        <ListGroup.Item >
          <Row>
            <Col md={4}>
              <div className='cv-header'>
                <ListGroup>
                  <ListGroup.Item className='list-group-cv-separador'><FontAwesomeIcon icon="fa-solid fa-fire" className='fa-8x' /></ListGroup.Item>
                  <ListGroup.Item className='list-group-cv-separador'><h6>#Diseñador Gráfico</h6></ListGroup.Item>
                  <ListGroup.Item className='list-group-cv-separador'><h6>#Diseñador Gráfico</h6></ListGroup.Item>
                  <ListGroup.Item className='list-group-cv-separador'><h6>#Diseñador Gráfico</h6></ListGroup.Item>
                  <ListGroup.Item className='list-group-cv-separador'><h6>#Hasta que lo hagas consciente,lo inconsciente dirigira tu vida y lo llamaras 'destino'. - C. Jung</h6></ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col md={8}>
              <Card>
                <Card.Img src={puertagif}></Card.Img>
              </Card>
            </Col>
          </Row>
        </ListGroup.Item>

        {/* componente bio */}
        <ListGroup.Item className='list-group-cv-header'>
          <div className='round-div me-2'><FontAwesomeIcon className="fa-icono " icon="fa-solid fa-user" /></div><h4 className='cv-header-h4'>Mini bio</h4>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row >
            <Bio/>
          </Row>
        </ListGroup.Item>
        

        {/* componente formacion */}
        <ListGroup.Item className='list-group-cv-header'>
        <div className='round-div me-2'><FontAwesomeIcon className="fa-icono " icon="fa-solid fa-book" /></div><h4 className='cv-header-h4'>{texts.edp0}</h4>
        </ListGroup.Item>
        
        <ListGroup.Item>
          <Row>
            <Col sm={12} md={8} lg={4} >
              {/* universidad */}
              <h6>{texts.edp1}</h6>
              <Card className='mb-4'>
                <Card.Body>
                  <Badge pill className='mb-4' bg="dark" text="light">{texts.edp1a}</Badge>
                  <Card.Title>
                    <h3>{texts.edp2}</h3>
                  </Card.Title>
                  <Card.Text>{texts.edp3}</Card.Text>
                </Card.Body>
              </Card>

              {/* certificaciones */}
              <h6>{texts.edp4}</h6>
              <Card className='mb-4' bg='dark' text='light'>
                <Card.Body>
                  <Badge pill className='mb-4' bg="light" text="dark">{texts.edp5}</Badge>
                  <Card.Text><strong>{texts.edp5a}</strong><br/><small>{texts.edp5b}</small></Card.Text>
                </Card.Body>
              </Card>

              <Card className='mb-4' bg='dark' text='light'>
                <Card.Body>
                  <Badge pill className='mb-4' bg="light" text="dark">{texts.edp6}</Badge>
                  <Card.Text><strong>{texts.edp6a}</strong><br/><small>{texts.edp6b}</small></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={6} lg={4} >
              {/* habilidades */}
              <Card className='mb-4'>
                <Card.Body>
                  <Card.Title><h6>{texts.edp7}</h6></Card.Title>
                  <Card.Text>
                    <ul>
                      <li>{texts.edp11}
                        <Row className='mt-2'>
                          <Col className='aplication-logos py-1' xs={2} sm={2} md={3}><Image src={photoshop} rounded></Image></Col>
                          <Col className='aplication-logos py-1' xs={2} sm={2} md={3}><Image src={illustrator} rounded></Image></Col>
                          <Col className='aplication-logos py-1' xs={2} sm={2} md={3}><Image src={after} rounded></Image></Col>
                          <Col className='aplication-logos py-1' xs={2} sm={2} md={3}><Image src={indesign} rounded></Image></Col>
                          <Col className='aplication-logos py-1' xs={2} sm={2} md={3}><Image src={adobexd} rounded></Image></Col>
                          <Col className='aplication-logos py-1' xs={2} sm={2} md={3}><Image src={figma} rounded></Image></Col>
                        </Row>
                        
                      </li>
                      <hr />
                      <li>{texts.edp8}</li>
                      <li>{texts.edp9}</li>
                      <hr />
                      <li>{texts.edp10}</li>
                      </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={6} lg={4}>
              {/* otros */}
              <Card className='mb-4'>
                <Card.Body>
                  <Card.Title><h6>{texts.edp12}</h6></Card.Title>
                  <Card.Text>
                    <ul>
                      <li>{texts.edp13}</li>
                      <li>{texts.edp14}</li>
                      <li>{texts.edp15}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </ListGroup.Item>

        {/* componente experiencia */}
        <ListGroup.Item className='list-group-cv-header'>
          <div className='round-div me-2'>
            <FontAwesomeIcon className="fa-icono " icon="fa-solid fa-handshake" />
          </div>
          <h4 className='cv-header-h4'>{texts.exp0}</h4>
        </ListGroup.Item>
        
        <ListGroup.Item>
          <Row>
            <Col md={4}></Col>
            <Col md={7} >
              <span class="badge rounded-pill text-bg-dark mb-4">{texts.exp15}</span>
              <h5>{texts.exp16}</h5>
              <ul>
                <li>{texts.exp17}</li>
                <li>{texts.exp18}</li>
                <li>{texts.exp19}</li>
              </ul>
              <span class="badge rounded-pill text-bg-dark mb-4">{texts.exp1}</span>
              <h5>{texts.exp2}</h5>
              <ul>
                <li>{texts.exp3}</li>
                <li>{texts.exp4}</li>
                <li>{texts.exp5}</li>
                <li>{texts.exp6}</li>
                <li>{texts.exp7}</li>
                <li>{texts.exp8}</li>
                <li>{texts.exp9}</li>
                <li>{texts.exp10}</li>
                <li>{texts.exp11}</li>
                <li>{texts.exp12}</li>
                <li>{texts.exp13}</li>
                <li>{texts.exp14}</li>
              </ul>
              
            </Col>
          </Row>
        </ListGroup.Item>

        {/* componente trabajos */}
        <ListGroup.Item className='list-group-cv-header'>
          <div className='round-div me-2'><FontAwesomeIcon className="fa-icono " icon="fa-solid fa-user" /></div><h4 className='cv-header-h4'>Trabajos</h4>
        </ListGroup.Item>

        <ListGroup.Item className='list-group-cv-grilla'>
            <Trabajos/>          
        </ListGroup.Item>

      </ListGroup>
      </Col>
      <Col md={1}></Col>
    </Row>
  )
}

export default Resume