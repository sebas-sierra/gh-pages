import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ClaseDiez = () => {
  return (
    <div>
        <Card>
            <Card.Header>Clase 10 - Context </Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    <p>Context en React nos permite enviar datos, almacenarlos y desde ahi distribuirlos a otros componentes dentro de mi aplicacion. Con el detalle de que la info no perdura dentro de mi aplicacion. Con el detalle de que la info no perdura dentro del componente sino que funciona como el 'sessionStorage' de JS.</p>
                    <ul>
                        <li>1 - createContext (Declaramos/creamos un contexto)</li>
                        <li>2 - useContext</li>
                        <li>3 - Provider (Distribuye la info a los componentes que la requieran)</li>
                    </ul>
                    <p>En React el flujo de datos es unidireccional, la unica forma de enviar datos es via PROPS.</p>
                    <ul>
                        <li>Un CONTEXT puede contener valores, funciones, objetos o referencias. Este hook nos sirve para almecenar la data que necesita la app para renderizarse correctamente. Pero para poder tener un codigo limpio y ordenado es fundamental crear lo que sera nuestro Contexto en un archivo independiente, desde el CONTEXTO distribuiremos la data con nuestra App la requiera.</li>
                        <li>El PROVIDER es el que distribuye la info guardada en nuestro Contexto hacia los distintos componentes de nuestra App que la soliciten. Para que los componentes y sus hijos accedan a la info tienen que estar envueltos por el componente Provider.</li>
                        <li>Como CONTEXT es un componente externo al componente APP no puedo pasarle valores a traves de "value". Para solucionar esto lo que tenemos que hacer es crear un componente Provider dentro del que vamos a retornar un componente '.Provider' al que si vamos a poder pasar valores. <br />
                        De esta manera al contar con un componente que nos retorna un '.Provider' no podemos pasar nada usando el value. Ahora para pasar valores y funciones a los componentes que funcionaran dentro de mi contexto vamos a usar los Children. <br />
                        Ya sabemos que en React cuando envuelvo con un componente otros componentes, estos componentes 'hijo' llegan al componente 'padre' a travez de una PROP llamada CHILDREN.</li>
                    </ul>
                    <Link to={'https://www.youtube.com/watch?v=iQrnojbuLUE&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=83'} >Curso React: 77. Context API - Haciendo una APP MultiIDIOMA SIN Context - jonmircha</Link>
                    <Link to={'https://www.youtube.com/watch?v=oOMk7RIPgOg'} >69. Firestore: Listando los primeros posts | Firebase | React en español</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ClaseDiez