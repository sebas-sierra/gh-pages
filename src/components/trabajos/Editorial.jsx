import React from 'react';
import { Badge, Button, Card, Col, Row, Stack, Image, Container} from 'react-bootstrap'
import Botonera from './Botonera';
import vaporcito from '../../assets/img/editorial/vaporcito.jpg'
import logo from '../../assets/img/editorial/logo-mansilla.png'
import mansilla from '../../assets/img/portfolio/editorial/mansilla-mockup.png'
const Editorial = () => {
  return (
    <>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <div className='presentacion-header'>
            <h1 className='portfolio-titulo'>Los Chacos de Mansilla</h1>
            <Stack direction='horizontal' gap={1} className='pb-2'><Badge pill bg="secondary"> ux / ui </Badge><Badge pill bg="secondary"> coding</Badge><Badge pill bg="secondary">github</Badge></Stack>
            <Stack direction='horizontal' gap={1}><Badge pill bg="dark">javascript</Badge><Badge pill bg="dark">html</Badge><Badge pill bg="dark">css</Badge><Badge pill bg="dark">bootstrap</Badge></Stack>
          </div>
          <div className='presentacion-body'>
            <p className='portfolio-bajada'>En un principio el desafio de este proyecto se centraba en dar formato a los textos mostrados en la web, eso incluia un seleccion tipografica que trasmita el espiritu de la publicacion original de los textos, definir una grilla para maniular el ritmo de lectura, establecer un tamaño de cuerpo para los textos y titulos, y un interlineado que permita un ritmo de lectura fluido y relajado. A medida que se avanzo en la resolucion del aspecto editorial del sitio se volvio necesario hacer cambio globales en la diseño de la intefaz.</p>
            <Button variant="outline-primary" href='https://iech.ddns.net/loschacosdemansilla/landing.html'>link al proyecto</Button>
          </div>
        </Col>
        <Col md="2"></Col>
      </Row>
      
      <div className='presentacion'>
        <Card.Img src={mansilla}  />
        {/* <Card.ImgOverlay width='250px' style={{marginRight: '300px'}}>
          <Card.Title><h3>Triptico areas de la biblioteca</h3></Card.Title>
          <Card.Text>Minus itaque optio, nostrum quam autem  <br/>cum quis nesciunt sint odio eum aperiam distinctio dicta.</Card.Text>
          <Button variant="primary"> ver mas</Button>
        </Card.ImgOverlay> */}
      </div> 

      {/* navbar */}
      <div style={{marginBottom:'1rem', backgroundColor: '#FAEBD7', height: '80px'}}><Image src={logo} style={{width:'240px'}}></Image></div>
      
      {/* maqueta */}
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <div style={{padding: '0px 20px'}}>
            
            <Botonera />
            <hr className='border-top' />
            <hr />
            <div className='viewer'>
              <div className='editorial'>
                <h2 className='genero'>CAUSERIE</h2>
                <h1 className='titulo'><span className='border-top-span'>DE CÓMO EL HAMBRE ME HIZO ESCRITOR</span></h1>
                <h4 className='dedicatoria'>(AL SEÑOR DON MARIANO DE VEDIA)</h4>
                <Row>
                  <Col></Col>
                  <Col md={6} xs={9} className='cita'>
                    <p>Si vous voulez bien parler et bien écrire, n’écouter et ne lisez que des choses bien dites et bien écrites.</p>
                    <h4 className='autor-cita'>(BUFFON.)</h4>
                  </Col>
                </Row>
                <p className='texto-decorrido frst-pa'>Salí de la cárcel….. así como suena, de la cárcel; no han leído ustedes mal, —puedo declararlo bien alto y en puridad; tanto más, cuanto que, siendo honrosos los motivos, como los míos lo fueron, hace más bien que mal saber prácticamente qué diferencia hay entre la crujía y la celda, —y, como Gil Blas, dueño de mi persona, y de algunos buenos pesos, me fui al Paraná.</p>
                <p className='texto-decorrido'>Digo mal, no me fui precisamente como Gil Blas, porque este le había hurtado algunos ducados a su tío, y la mosca que yo llevaba habíamela dado mi queridísimo tío y padrino, Gervasio Rozas.</p>
                <p className='texto-decorrido'>Pero llevaba cierto bagaje de malicia del mundo, que le hacía equilibrio a mi buena fe genial.</p>
                <p className='texto-decorrido'>Yo me decía, estando en el calabozo: “Cuando me pongan en libertad, —padecía por haber defendido á mis padres,— haré tal o cual cosa…”.</p>
                <p className='texto-decorrido'>La prisión me había hecho mucho bien. ¡Cuán instructivas son las tinieblas!</p>
                <div className='text-center img-centrada'><Image src={vaporcito}></Image></div>
                <p className='texto-decorrido'>El hombre propone, Dios, o el Otro, dispone. No hay quien no tenga su ananké, prescindiendo de la lucha entre el bien y el mal, que será eterna, como aquellos dos genios de lo bueno y de lo malo: Dios, o el Otro. [No hay quien no tenga su ananké, prescindiendo de la lucha entre el bien y el mal, que será eterna, como aquellos dos genios de lo bueno y de lo malo: Dios, o el Otro.]</p>
                <p className='texto-decorrido'>Me pusieron en libertad, —si en libertad puede decirse ser desterrado, y todos aquellos castillos en el aire, hechos a la sombra y en las sombras, se desplomaron, zapados por lo inesperado de mi nueva situación.</p>
                {/* <a href="http://https://www.youtube.com/watch?v=xOy0kVlbhlc">Botones para cambiar el tamaño de fuente</a> */}
              </div>
            </div>
          </div>
        </Col>

        <Col md="2"></Col>
      </Row>
    </>
  )
}

export default Editorial