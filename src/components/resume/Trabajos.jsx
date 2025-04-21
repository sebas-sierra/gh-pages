import React from 'react';
import blueberries from '../../assets/img/imagenes/portfolio-blueberries-vacio.png';
import prode from '../../assets/img/imagenes/portfolio-prode-vacio.png';
import detaller from '../../assets/img/imagenes/portfolio-detaller-vacio.png';
import dibujos from '../../assets/img/imagenes/portfolio-dibujos-vacio.png';
import bnm from '../../assets/img/imagenes/portfolio-bnm.png';

const Trabajos = () => {
  return (
  // -- Grilla de imagenes --
  <div class="w3-row">
    <div class="w3-col m4">
      <a href='/gh-pages/#/trabajos/detaller' className='detaller-btn'><img src={detaller} alt='' style={{width:"100%"}}/></a>
    </div>

    <div class="w3-col m8">
      <div class="w3-row">
        <div class="w3-col m5">
          <a href='/gh-pages/#/trabajos/prode' className='prode-btn'><img src={prode} alt='' style={{width:"100%"}}/></a>
        </div>
        <div class="w3-col m7">
          <a href='/gh-pages/#/trabajos/blueberries' className='blueberries-btn'><img src={blueberries} alt='' style={{width:"100%"}}/></a>
        </div>
      </div>

      <div class="w3-row">
        <div class="w3-col m8">
          <a href='/gh-pages/#/trabajos/bnm'><img src={bnm} alt='' style={{width:"100%"}}/></a>
        </div>

        <div class="w3-col m4"> 
          <a href='/gh-pages/#/trabajos/ilustracion' className='dibujo-btn'><img src={dibujos} alt='' style={{width:"100%"}}/></a>
        </div>
      </div>
    </div>

  </div>
    
  )
}

export default Trabajos