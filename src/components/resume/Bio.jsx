import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Button, Card, Col, Image, Row, ListGroup, ListGroupItem} from 'react-bootstrap'
import Contacto from './Contacto';
import perfil from '../../assets/img/imagenes/perfil-cv.png';
import tag from '../../assets/img/imagenes/tag-cv.png'

const Bio = () => {
    const {texts} = useContext (ThemeContext)
    return (
        <>
            <Col md={5} >
                <Card className='card-noborder'>
                    <Card.Img src={perfil}></Card.Img>
                    <div style={{position:'relative', border:'0px'}}><Card.Img src={tag}></Card.Img><Button style={{position: 'absolute', right: '-20px', top: '260px'}}>Descargar CV formato PDF</Button></div>
                    {/* <Card.ImgOverlay>
                        <div className='img-overlay-cv'>
                        <Card.Title><h2>Sebastián Sierra</h2></Card.Title>
                        <Card.Text><h4>{texts.biop0}</h4></Card.Text>
                        <Button href='#'>Descargar cv formato PDF</Button>
                        </div>
                    </Card.ImgOverlay> */}
                </Card>
            </Col>
            <Col md={7} >
                <ListGroup>
                    <ListGroupItem className='listgroupitem-padding'>
                        <h4>Biografia</h4>
                        <Card className='card-noborder'>
                            <Card.Body  className='listgroupcard-padding'>
                                <Card.Title>{texts.biop0}</Card.Title>
                                <Card.Text>
                                    {texts.biop1}<br/><br/>
                                    {texts.biop2}<br/><br/>
                                    {texts.biop3}<br/><br/>
                                    {texts.biop4}<br/><br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ListGroupItem>
                    <ListGroupItem className='listgroupitem-padding'>
                        <Contacto/>
                    </ListGroupItem>
                </ListGroup>                
            </Col>
        </>
    )
}

export default Bio