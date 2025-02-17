import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Badge, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ClaseSeis = () => {
  return (
      <Card className="mb-2">
            <Card.Header><Badge pill bg="secondary">Clase Nº 6 </Badge><h1>Promises: Asincronia y MAP</h1></Card.Header>
            <Card.Body>
                <Card.Title>Promesa - Poniendo en uso el Hook useEffect</Card.Title>
        
                <Card.Text>
                    <p>Una 'Promesa' va de la mano co los Procesos Asincronos. Por ejemplo: cuando vamos a un restaurant y hacemos nuestro pedido a un mozo, el mozo se dirije a la cocina y pide la orden. Mientras en la cocina se prepara nuestra comida, el mozo sigue su tarea y atiende el resto de las mesas. Cuando nuestro pedido esta listo, se da la orden y el mozo nos entrega nuestra comida.<br />
                    En este ejemplo mientras en la cocina se preparaba nuestro pedido el mozo nunca dejo de seguir con su tarea, es decir no se quedo parado esperando a que el pedido este listo sino que siguio trabajando.</p>
                    <p>Cuando nosotros trabajamos con codigo una promesa representa algo, una operacion que sera resuelta luego, despues de la tarea principal (Por ejemplo, la pantalla muestra una 'barra de loading' mientras la promesa se resuelve para que el navegador pueda pintar, por ejemplo una lista de items con los datos obtenidos en el sitio web). Una promesa nos permite representar y seguir el ciclo de vida de una tarea/ operacion (una funcion).</p>
                    <p>Pero rara vez codeamos una Promesa a mano, sino que por lo general usamos algun metodo que nos devuelve una Promesa, un metodo como Fetch, Axios, Ajaxs. Cada vez que pedidmos datos, informacion, a una fuente externa esta nos devuelve una Promesa, se denomina 'Promesa' porque no sabemos en que momento llegara esa data que solicitamos y asi entonces la Promesa queda saldada.</p>
                    <p>Una Promesa puede estar escrita como una constante o como una funcion.</p>
                    <p>Una promesa lleva dos parametros (a,b), (res, rej) o (response, rejected). Son DOS parametros: el primero es para resolver la Promesa de una manera optima, el segundo parametro se ejecuta cuando la Promesa es rechazada. Cada vez que usamos una Promesa que ha sido resuelta podemos obtener los datos que nos trae haciendo uso del metodo 'Then' en caso que la resolucion sea positiva o usando el metodo 'Catch' en caso que se resuelva negativamente. En nuestro caso la usamos para obtener una respuesta 'positiva', es decir traer la informacion que necesitamos de manera correcta. Para esto trabajamos basicamente solo con el primer parametro 'Response'.</p>
                    <p>Una Promesa nos devuelve un array de objetos, para poder renderizar los objetos dentro del array y mostrarlos en pantalla. Para esto hay que recorrer el array e ir capturando la informacion de cada objeto. Esto lo conseguimos usando el metodo MAP, este metodo nos permite generar un nuevo array tomando como base un array ya existente y utilizando una funcion transformadora.</p>
                    <p>Estructura basica del hook useEffect:</p>
                    <code>useEffect (() =&#62; &#123; funcion-a-ejecutar &#125;, [ array-de-dependencias ]);</code><br /><br />
                    <p>Entonces dentro del useEffect tendremos nuestra promesa escrita como una funcion y la resolucion de la promesa con los metodos then y catch, y en caso que lo necesitemos el array de dependencia.</p>
                    <code>useEffect (() =&#62; &#123;<br />
                    const getProducts = () =&#62; &#123;<br />
                    return new Promise((res, rej) =&#62; &#123;<br />
                    res(products);<br />
                    &#125;);<br />
                    &#125;;<br />
                    getProducts()<br />
                    .then(( res ) =&#62; &#123;<br />
                      setItems(res);<br />
                      &#125;)<br/>
                    .catch((error) =&#62; &#123;<br />
                      console.log(error);<br/>
                      &#125;);<br />
                    &#125;, [ array-de-dependencias ]);</code><br /><br />
                    <p>Para persistir datos en los componentes a travez de los renderizados hacemos uso del Hook useState.  Teniendo esto en cuenta podemos definir un estado donde almacenar los datos que obtuvimos de la resolucion de la promesa y mostrar la info en pantalla.</p>
                    <p>Los datos obtenidos de la promesaestan encapsulados en un array para mostrarlos en pantalla tenemos que hacer uso del metodo .map que nos va a permitir recorrer el array e ir retornando JSX para renderizar la info en el navegador.</p>
                </Card.Text>

                <Button href='/capitulos/claseseis/productos/furniture'>Furniture</Button>
                <Button href='/capitulos/claseseis/productos/decoracion'>Decoracion</Button>
                <Button href='/capitulos/claseseis/productos/mesas'>Mesas</Button> 
                <br /><br />
                <Link to={'productos'} >Todos</Link>
                <Link to={'productos/furniture'} >Furniture</Link>
                <Link to={'productos/decoracion'} >Decoracion</Link>
                <Link to={'productos/mesas'} >Mesas</Link>
                <br /><br />
                <Outlet/>
                
            </Card.Body>
        </Card>

  )
}

export default ClaseSeis