import React from 'react';
import ItemListContainer from './ItemListContainer';
import { Outlet } from 'react-router-dom';
import Carusel from './Carusel';

const Catalogo = () => {
  

  return (
    <>
      <Carusel/>
      <Outlet/>
      <ItemListContainer/>
      {/* <ItemDetailContainer/> */}
    </>
  )
}

export default Catalogo