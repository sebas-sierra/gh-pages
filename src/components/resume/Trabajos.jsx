import React from 'react';
import { Button, Table } from 'react-bootstrap'
import blueberries from '../../assets/img/imagenes/portfolio-blueberries-vacio.png';
import prode from '../../assets/img/portfolio/prode/banner-prode.png';
import mansilla from '../../assets/img/portfolio/editorial/banner-mansilla.png';
import detaller from '../../assets/img/portfolio/de-taller/banner-de-taller.png';
import ilustracion from '../../assets/img/portfolio/ilustracion/banner-illustration.png';
import bnm from '../../assets/img/portfolio/bnm/banner-bnm.png';
import waterclor from '../../assets/img/portfolio/waterclor/banner-waterclor.png';

const Trabajos = () => {
  return (
    <Table>
      {/* <thead>
        <tr>
          <th >1</th>
          <th >2</th>
        </tr>
      </thead> */}
      <tbody>
        <tr>
          <td>De-taller</td>
          <td><Button className="btn-trabajos" variant="primary" size="lg" href='/gh-pages/#/trabajos/detaller'><img src={detaller} alt='' style={{width:"100%"}}/></Button></td>
        </tr>
        <tr>
          <td>Prode</td>
          <td><Button className="btn-trabajos" variant="primary" size="lg" href='/gh-pages/#/trabajos/prode'><img src={prode} alt='' style={{width:"100%"}}/></Button></td>
        </tr>
        <tr>
          <td>Ilustracion</td>
          <td><Button className="btn-trabajos" variant="primary" size="lg" href='/gh-pages/#/trabajos/ilustracion'><img src={ilustracion} alt='' style={{width:"100%"}}/></Button></td>
        </tr>
        <tr>
          <td>Biblioteca Nacional de Maestros</td>
          <td><Button className="btn-trabajos" variant="primary" size="lg" href='/gh-pages/#/trabajos/bnm'><img src={bnm} alt='' style={{width:"100%"}}/></Button></td>
        </tr>
        <tr>
          <td>Frontend</td>
          <td><Button className="btn-trabajos" variant="primary" size="lg" href='/gh-pages/#/trabajos/editorial'><img src={mansilla} alt='' style={{width:"100%"}}/></Button></td>
        </tr>
        <tr>
          <td>Etiquetas</td>
          <td><Button className="btn-trabajos" variant="primary" size="lg" href='/gh-pages/#/trabajos/waterclor'><img src={waterclor} alt='' style={{width:"100%"}}/></Button></td>
        </tr>
      </tbody>

    </Table>

  
  // -- Grilla de imagenes --
  // <div class="w3-row">
  //   <div class="w3-col m4">
  //     <a href='/gh-pages/#/trabajos/detaller' className='detaller-btn'><img src={detaller} alt='' style={{width:"100%"}}/></a>
  //   </div>

  //   <div class="w3-col m8">
  //     <div class="w3-row">
  //       <div class="w3-col m5">
  //         <a href='/gh-pages/#/trabajos/prode' className='prode-btn'><img src={prode} alt='' style={{width:"100%"}}/></a>
  //       </div>
  //       <div class="w3-col m7">
  //         <a href='/gh-pages/#/trabajos/blueberries' className='blueberries-btn'><img src={blueberries} alt='' style={{width:"100%"}}/></a>
  //       </div>
  //     </div>

  //     <div class="w3-row">
  //       <div class="w3-col m8">
  //         <a href='/gh-pages/#/trabajos/bnm'><img src={bnm} alt='' style={{width:"100%"}}/></a>
  //       </div>

  //       <div class="w3-col m4"> 
  //         <a href='/gh-pages/#/trabajos/ilustracion' className='dibujo-btn'><img src={dibujos} alt='' style={{width:"100%"}}/></a>
  //       </div>
  //     </div>
  //   </div>

  // </div>
    
  )
}

export default Trabajos