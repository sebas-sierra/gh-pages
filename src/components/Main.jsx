import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Home from './Home';
import ImagenesRs from './capitulos/ImagenesRs';
import ClaseUno from './capitulos/ClaseUno';
import ClaseDos from './capitulos/ClaseDos';
import ClaseTres from './capitulos/ClaseTres';
import ClaseCuatro from './capitulos/ClaseCuatro';
import ClaseCinco from './capitulos/ClaseCinco';
import ClaseSeis from './capitulos/ClaseSeis';
import ClaseSiete from './capitulos/ClaseSiete';
import ClaseOcho from './capitulos/ClaseOcho';
import ClaseNueve from './capitulos/ClaseNueve';
import ClaseDiez from './capitulos/ClaseDiez';
import ClaseOnce from './capitulos/ClaseOnce';
import ClaseDoce from './capitulos/ClaseDoce';
import ClaseTrece from './capitulos/ClaseTrece';
import ClaseCatorce from './capitulos/ClaseCatorce';
import UninstallVSC from './capitulos/UninstallVSC';
import Catalogo from './capitulos/Catalogo';
import ItemDetailContainer from './capitulos/ItemDetailContainer';
import Cart from './cart/Cart';
import FormA from './FormA';
import Carusel from './capitulos/Carusel';
// import ItemListContainer from './capitulos/ItemListContainer';
// import ClaseNueve from './capitulos/ClaseNueve';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Resume from './Resume';
import Glosario from './capitulos/Glosario';


const Main = () => {
  // const onAdd = (cantidad) => {
  //   console.log('Funciona' + cantidad + 'unidades');
  // }


  return (
    <>
    <Carusel/>
    <Container className='main'>
        <Row>
            {/* <h1>Main *</h1> */}
            <Routes>
            <Route path='/' element={<Home/>} />
              <Route path='/resume' element={<Resume/>} />
              <Route path='/capitulos/imagenesrs' element={<ImagenesRs/>} />
              <Route path='/capitulos/claseuno' element={<ClaseUno/>} />
              <Route path='/capitulos/clasedos' element={<ClaseDos/>} />
              <Route path='/capitulos/clasetres' element={<ClaseTres/>} />
              <Route path='/capitulos/clasecuatro' element={<ClaseCuatro/>} />
              <Route path='/capitulos/clasecinco' element={<ClaseCinco/>}  />
              <Route path='/capitulos/claseseis/productos' element={<ClaseSeis/>} />

              <Route path='/capitulos/prod' element={ <Catalogo/> } />
              <Route path='/capitulos/prod/category/:categoryName' element={ <Catalogo/> } />
              <Route path='/capitulos/itemdetail/:idProd' element={ <ItemDetailContainer/> } />

              <Route path='/capitulos/clasesiete' element={<ClaseSiete/>} />
              <Route path='/capitulos/claseocho' element={<ClaseOcho/>} />
              <Route path='/capitulos/clasenueve' element={<ClaseNueve/>} />
              <Route path='/capitulos/clasediez' element={<ClaseDiez/>} />
              <Route path='/capitulos/claseonce' element={<ClaseOnce/>} />
              <Route path='/capitulos/clasedoce' element={<ClaseDoce/>} />
              <Route path='/capitulos/clasetrece' element={<ClaseTrece/>} />
              <Route path='/capitulos/clasecatorce' element={<ClaseCatorce/>} />
              <Route path='/capitulos/glosario' element={<Glosario/>} />
              <Route path='/capitulos/desinstalarvsc' element={<UninstallVSC/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<FormA/>}/>
            </Routes>
          {/* <Col sm={8}>
          </Col> */}
        </Row>
    </Container></>
  )
}

export default Main