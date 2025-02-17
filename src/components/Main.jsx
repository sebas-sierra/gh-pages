import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
import { Row, Col } from 'react-bootstrap';

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
import Blueberries from './trabajos/Blueberries';
import Prode from './trabajos/Prode';
import Bnm from './trabajos/Bnm';
import DeTaller from './trabajos/DeTaller';
import Ilustracion from './trabajos/Ilustracion';
import Editorial from './capitulos/Editorial';
// import ItemListContainer from './capitulos/ItemListContainer';
// import ClaseNueve from './capitulos/ClaseNueve';
import { Routes, Route } from 'react-router-dom'
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Resume from './Resume';
import Glosario from './capitulos/Glosario';
// import { useContext } from 'react';


const Main = () => {
  const { theme } = useContext (ThemeContext)
  // const onAdd = (cantidad) => {
  //   console.log('Funciona' + cantidad + 'unidades');
  // }


  return (
    <>
      {/* <Container className='main' mt='4'> */}
      <Container fluid className={theme}>
        <Row className="justify-content-md-center">
          <Col md={1}></Col>
          <Col md={8}>
            {/* <h1>Main *</h1> */}
            <Routes>
              <Route path='/' element={<Home />} />
              {/* <Route path='/resume' element={<Resume />} /> */}
              <Route path='/capitulos/imagenesrs' element={<ImagenesRs />} />
              <Route path='/capitulos/claseuno' element={<ClaseUno />} />
              <Route path='/capitulos/clasedos' element={<ClaseDos />} />
              <Route path='/capitulos/clasetres' element={<ClaseTres />} />
              <Route path='/capitulos/clasecuatro' element={<ClaseCuatro />} />
              <Route path='/capitulos/clasecinco' element={<ClaseCinco />} />
              <Route path='/capitulos/claseseis/productos' element={<ClaseSeis />} />

              {/* <Route path='/capitulos/prod' element={<Catalogo />} />
              <Route path='/capitulos/prod/category/:categoryName' element={<Catalogo />} />
              <Route path='/capitulos/itemdetail/:idProd' element={<ItemDetailContainer />} /> */}

              <Route path='/capitulos/clasesiete' element={<ClaseSiete />} />
              <Route path='/capitulos/claseocho' element={<ClaseOcho />} />
              <Route path='/capitulos/clasenueve' element={<ClaseNueve />} />
              <Route path='/capitulos/clasediez' element={<ClaseDiez />} />
              <Route path='/capitulos/claseonce' element={<ClaseOnce />} />
              <Route path='/capitulos/clasedoce' element={<ClaseDoce />} />
              <Route path='/capitulos/clasetrece' element={<ClaseTrece />} />
              <Route path='/capitulos/clasecatorce' element={<ClaseCatorce />} />
              <Route path='/capitulos/glosario' element={<Glosario />} />
              <Route path='/capitulos/desinstalarvsc' element={<UninstallVSC />} />
              <Route path='/trabajos/blueberries' element={<Blueberries />} />
              <Route path='/trabajos/prode' element={<Prode />} />
              <Route path='/trabajos/bnm' element={<Bnm />} />
              <Route path='/trabajos/detaller' element={<DeTaller />} />
              <Route path='/trabajos/ilustracion' element={<Ilustracion />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<FormA />} />
              <Route path='/capitulos/itemdetail/:idProd' element={<ItemDetailContainer />} />
            </Routes>
          </Col>
          <Col md={1}></Col>

          <Routes>
            <Route path='/resume' element={<Resume />} />
            <Route path='/capitulos/prod' element={<Catalogo />} />
            <Route path='/capitulos/prod/category/:categoryName' element={<Catalogo />} />
            <Route path='/capitulos/editorial' element={<Editorial/>} />
          </Routes>
        </Row>
      </Container>
    </>
  )
}

export default Main