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
        <ul>
          <li>Las publicaciones de Instagram pueden ser cuadradas, horizontales o verticales. Todas las imágenes se recortarán en un cuadrado en el feed.</li>
          <li>El tamaño ideal para publicaciones cuadradas es de 1080 px por 1080 px en una relación de aspecto de 1:1.</li>
          <li>Para publicaciones horizontales, usa una imagen de 1200 px por 628 px, con una relación de aspecto de 1,91:1.</li>
          <li>Las imágenes verticales deben tener un tamaño de 1080 px por 1350 px con una relación de aspecto de 4:5.</li>
        </ul>
        
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
        <h4>Video</h4>
        <ul>
          <li>Puedes subir vídeos que tengan el mismo tamaño que las publicaciones de imágenes que se encuentran arriba; que su tamaño esté entre una relación de aspecto 1,91:1 a 4:5.</li>
          <li>El tamaño de vídeo horizontal ideal es una relación de aspecto de 16:9 porque ese es el formato en el que graba tu smartphone cuando se gira hacia un lado, por lo que tu vídeo aparecerá de forma más natural cuando se mantenga en su tamaño original.</li>
          <li>Asegúrate de que tus vídeos no tengan más de 4 GB.</li>
          <li>Las publicaciones de vídeo pueden durar hasta 60 segundos.</li>
        </ul>
        <h4>Stories</h4>
        <ul>
          <li>Si bien las imágenes se pueden recortar y dimensionar manualmente para ajustarlas a una historia, el tamaño recomendado para mostrarse a pantalla completa con contenido es de 1080 px por 1920 px (una relación de aspecto de 9:16).</li>
          <li>Esto se aplica tanto a las fotos como a los vídeos.</li>
          <li>Las imágenes se mostrarán durante cinco segundos y los vídeos se mostrarán en incrementos de 15 segundos. Puedes grabar un vídeo por un minuto completo que se dividirá en cuatro partes de 15 segundos, pero después de un minuto, deberás comenzar a grabar nuevamente.</li>
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
        <p>Twitch / Overlays para Twitch (OBS) </p>
        <ul>
          <li>Banner - 1920px x 480px</li>
          <li>Profile Picture - una imagen con un hueco donde se pone un avatar de usuario.</li>
          <li>Panels</li>
          <li>Offline Image - video player banner image</li>
          <li>Starting Soon Overlay</li>
          <li>Be Right Back Overlay</li>
          <li>Intermission Overlay - Se usa cuando tenes la camara en primer plano y se muestra una pantalla en un recuadro.</li>
          <li>Cam Overlay - Se usa para mostrar pantalla completa y la camara en un recuadro.</li>
          <li>Labels Bar - Elementos que van entre escenas para mostrar por ejemplo nuevos seguidores o zocalos.</li>
          <li>Seteo de proyecto 1080p., 1920px x 1080px., 300dpi, RGB 16Bits </li>
        </ul>
        <p>Whatsapp</p>
    </div>
  )
}

export default ImagenesRs