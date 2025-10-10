import React from 'react';
import { Button, } from 'react-bootstrap'

const Botonera = () => {
  return (
    <div>
      <Button className="btn btn-sm btn-publicaciones active">Publicacion ilustrada</Button>
      <Button className="btn btn-sm btn-publicaciones" >Publicacion anotada</Button>
      <Button className="btn btn-sm btn-publicaciones" >Publicacion original</Button>
    </div>
  )
}

export default Botonera