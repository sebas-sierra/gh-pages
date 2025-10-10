import React from 'react';
import { Button, Table } from 'react-bootstrap'
import blueberries from '../../assets/img/imagenes/portfolio-blueberries-vacio.png';
import prode from '../../assets/img/imagenes/portfolio-prode-vacio.png';
import detaller from '../../assets/img/imagenes/portfolio-detaller-vacio.png';
import dibujos from '../../assets/img/imagenes/portfolio-dibujos-vacio.png';
import bnm from '../../assets/img/imagenes/portfolio-bnm.png';
import laburos from '../../assets/img/imagenes/portfolio-laburos-vacio.png';

const Trabajos = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th width='34%'>1</th>
          <th width='66%'>2</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>De-taller</td>
          <td><Button variant="primary" size="lg"><img src={laburos} alt='' style={{width:"100%"}}/></Button></td>
        </tr>
        <tr>
          <td>Prode</td>
          <td><Button variant="primary" size="lg"><img src={laburos} alt='' style={{width:"100%"}}/> foto prode </Button></td>
        </tr>
        <tr>
          <td>Ilustracion</td>
          <td><Button variant="primary" size="lg"><img src={laburos} alt='' style={{width:"100%"}}/> foto ilustracion </Button></td>
        </tr>
        <tr>
          <td>Biblioteca Nacional de Maestros</td>
          <td><Button variant="primary" size="lg"><img src={laburos} alt='' style={{width:"100%"}}/>fotos BNM </Button></td>
        </tr>
        <tr>
          <td>Frontend</td>
          <td><Button variant="primary" size="lg"><img src={laburos} alt='' style={{width:"100%"}}/> foto frontend </Button></td>
        </tr>
        <tr>
          <td>Etiquetas</td>
          <td><Button variant="primary" size="lg"><img src={laburos} alt='' style={{width:"100%"}}/> foto etiquetas </Button></td>
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