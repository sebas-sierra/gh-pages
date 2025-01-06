import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

const ClaseOnce = () => {
  return (
    <div>
        <Card>
            <Card.Header>Clase 11 - Rendering Condicional</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <p>Existen una serie de tecnicas para hacer que el renderizado de algunos componentes este atado a que se cumplan determinadas condiciones. Es decir que puedo pedir a mi aplicacion que renderice solo algunos nodos de un arbol o de otro haciendo uso de condicionales.
                  </p>
                  <p>Flujo de reconciliacion</p>
                  <p>A veces se producen sin intencion y causan bugs o perdida no intencionada del estado, dando inestabilidad.</p>
                  <ul>
                    <li>1- IF con return temprano <br />Se puede colocar un If condicional por fuera del return. Este If comprueba quee la condicion sea verdadera y renderiza su propio return.</li>
                    <li>2- Rendering Condicional con Ternario Inline <br />Funciona como un ternario comun. Primero verifa la condicion '?' y si se cumple renderizo algo y sino se cumple renderizp otra cosa.</li>
                    <li>3- Rendering Condicional con Inline Fragment <br /></li>
                  </ul>
                  <p>Usando Rendering Condicional puedo cambiar clases, mostrar u ocultar elementos, imagenes o componentes. Por ejemplo creando un contexto especifico podemos cambiar el aspecto completo de nuestra aplicacion (Por ejemplo DARK o LIGHT mode). <br />
                     El Rendering Condicional no solo se aplica a los nodos sino que tb para sus propiedads</p>
                  <p>useEffect es usado para optimizar el renderizado y la performance de un componente.</p>
                  <p>useMemo y useCallback son usados para memorizar valores y funciones. De esta manera evitamos que...</p>
                  <p>Usando React-memo puedo decirle a React que solo haga re-render cuando una propiedad especifica cambie.</p>
                  <p>REACT SPINNERS - 23*44</p>
                  <Link to={'https://www.npmjs.com/package/react-spinners'} >https://www.npmjs.com/package/react-spinners</Link><br />

                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
          <Card.Header>Clase 11 - Rendering Condicional - After class / Repaso</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default ClaseOnce