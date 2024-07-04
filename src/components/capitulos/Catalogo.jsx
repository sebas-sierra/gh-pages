import React from 'react';
import ItemListContainer from './ItemListContainer';
// import ItemDetailContainer from './ItemDetailContainer';
import { Link, Outlet } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const Catalogo = () => {

  return (
    <div>
      <h4>CATALOGO</h4>
      <Button href='/gh-pages/#/capitulos/prod/category/furniture'>Furniture</Button>
      <Button href='/gh-pages/#/capitulos/prod/category/decoracion'>Decoracion</Button>
      <Button href='/gh-pages/#/capitulos/prod/category/mesas'>Mesas</Button>
      <br /><br />
      <Link to={'productos'} >Todos</Link>
      <Link to={'/capitulos/prod/category/furniture'} >Furniture</Link>
      <Link to={'/capitulos/prod/category/decoracion'} >Decoracion</Link>
      <Link to={'/capitulos/prod/category/mesas'} >Mesas</Link>

      <Outlet/>
      <ItemListContainer/>
      {/* <ItemDetailContainer/> */}
    </div>
  )
}

export default Catalogo