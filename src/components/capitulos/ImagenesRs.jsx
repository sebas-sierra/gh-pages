import React from 'react';
import { useState, useEffect } from 'react';
import { imagenes } from '../../assets/imagenes';


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ImagenesRs = () => {
  const [ imagen, setImagenes ]= useState ([]);

  useEffect (() =>{
    const getImagenes = () => {
      return new Promise ((res, rej) => {
        setTimeout(() => { 
          res(imagenes);
        }, 3000 );
      });
    };

    getImagenes ()
    .then ((res) => {
      setImagenes(res);
    })
    .catch ((error) => {
      console.log('res', error)

    });

  }, []);

  

  return (
    <div>
        <p>Imagenes para Redes Sociales</p>
        <ul>
            <li>Instagram</li>
            <li>Twitch</li>
            <li>Whatsapp</li>
        </ul>

        <p>Instagram</p>
        <h4>Post</h4>
        <Row xs={1} md={3} className="g-4">
          {imagen.map((imagen) => (
          <Col key={imagen.id}>
            <Card>
              <Card.Img variant="top" src={imagen.img} />
              <Card.Body>
                <Card.Title>{imagen.title}</Card.Title>
                <Card.Text>aspect ratio: {imagen.aspectRatio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>))}
        </Row>
        
        <ul>
          <li>Post</li>
          

    

        
<li>Video</li>
          <li>storys</li>
        </ul>
        {/* <Row xs={1} md={3} className="g-4">
          <Col>
            <Card  className="mb-2">
              <Card.Img variant="top" src={imagenes.img1} />
              <Card.Body>
                <Card.Title>1080px x 1080px</Card.Title>
                <Card.Text>aspectratio 1:1</Card.Text>
              </Card.Body>
            </Card>

            <Card  className="mb-2">
              <Card.Img variant="top" src={imagenes.img2} />
              <Card.Body>
                <Card.Title>1080px x 1350px</Card.Title>
                <Card.Text>aspectratio 4:5</Card.Text>
              </Card.Body>
            </Card>

            <Card  className="mb-2">
              <Card.Img variant="top" src={imagenes.img3} />
              <Card.Body>
                <Card.Title>1080px x 1350px</Card.Title>
                <Card.Text>aspectratio 4:5</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
        <p>Twitch</p>
        <p>Whatsapp</p>
    </div>
  )
}

export default ImagenesRs