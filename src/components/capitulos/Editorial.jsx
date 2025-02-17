import React from 'react';
import { Col, Row, Image } from 'react-bootstrap'
import Botonera from './Botonera';
import carcel from '../../assets/img/editorial/carcel.png'
import logo from '../../assets/img/editorial/logo-mansilla.png'
const Editorial = () => {
  return (
    <>
    <div className='editorial'>
    <div className='text-center img-centrada'><Image src={logo}></Image></div>
    <Botonera/>
    <Row>
        <Col></Col>
        <Col xs={10} md={8}>
        
        <hr className='border-top'/>
            <hr/>
        <h2 className='genero'>CAUSERIE</h2>
        <h1 className='titulo'><span className='border-top-span'>DE CÓMO EL HAMBRE<br/> ME HIZO ESCRITOR</span></h1>
        <h4 className='dedicatoria'>(AL SEÑOR DON MARIANO DE VEDIA)</h4>
        <Row>
            <Col></Col>
            <Col xs={9} md={6} className='italica'>
                <p>Si vous voulez bien parler et bien écrire, n’écouter et ne lisez que des choses bien dites et bien écrites.</p>
                <h4 className='buffon'>(BUFFON.)</h4>
            </Col>
        </Row>
        <p className='texto-decorrido frst-pa'>Salí de la cárcel….. así como suena, de la cárcel; no han leído ustedes mal, —puedo declararlo bien alto y en puridad; tanto más, cuanto que, siendo honrosos los motivos, como los míos lo fueron, hace más bien que mal saber prácticamente qué diferencia hay entre la crujía y la celda, —y, como Gil Blas, dueño de mi persona, y de algunos buenos pesos, me fui al Paraná.</p>
        <p className='texto-decorrido'>Digo mal, no me fui precisamente como Gil Blas, porque este le había hurtado algunos ducados a su tío, y la mosca que yo llevaba habíamela dado mi queridísimo tío y padrino, Gervasio Rozas.</p>
        <p className='texto-decorrido'>Pero llevaba cierto bagaje de malicia del mundo, que le hacía equilibrio a mi buena fe genial.</p>
        <p className='texto-decorrido'>Yo me decía, estando en el calabozo: “Cuando me pongan en libertad, —padecía por haber defendido á mis padres,— haré tal o cual cosa…”.</p>
        <p className='texto-decorrido'>La prisión me había hecho mucho bien. ¡Cuán instructivas son las tinieblas!</p>
        <div className='text-center img-centrada'><Image src={carcel}></Image></div>
        <p className='texto-decorrido'>El hombre propone, Dios, o el Otro, dispone. No hay quien no tenga su ananké, prescindiendo de la lucha entre el bien y el mal, que será eterna, como aquellos dos genios de lo bueno y de lo malo: Dios, o el Otro. [No hay quien no tenga su ananké, prescindiendo de la lucha entre el bien y el mal, que será eterna, como aquellos dos genios de lo bueno y de lo malo: Dios, o el Otro.]</p>
        <p className='texto-decorrido'>Me pusieron en libertad, —si en libertad puede decirse ser desterrado, y todos aquellos castillos en el aire, hechos a la sombra y en las sombras, se desplomaron, zapados por lo inesperado de mi nueva situación.</p>
<a href="http://https://www.youtube.com/watch?v=xOy0kVlbhlc">Botones para cambiar el tamaño de fuente</a>
        </Col>
        <Col></Col>
    </Row>
    </div>
    </>
  )
}

export default Editorial