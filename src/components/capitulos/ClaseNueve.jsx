import React from 'react';
import { Badge, Card } from 'react-bootstrap';


const ClaseNueve = () => {
  return (
    <Card>
      <Card.Header className='apuntes-react'><Badge pill bg="dark">Clase Nº 9 </Badge><h1>Eventos / Formularios</h1></Card.Header>
      <Card.Body>
        <Card.Title>Tipos de eventos</Card.Title>

        <Card.Text>
          <ul>
            <li>Automaticos - Los eventos se disparan con programacion en un momento 'X' determinado por el desarrollador.</li>
            <li>Manual - Interaccion del usuario con la UI, por ejemplo un usuario haciendo click en un boton.</li>
          </ul>
          <p>El evento de UI mas facil de identificar es el Click.</p>
          <p>Que es un EventListener?: Es un patron de diseño que sirve para escuchar cuando un algo ocurre sobre algun elemento y desencadena la ejecucion de una accion en consecuencia.</p>

          <p>Podemos hablar de dos metodos de manipulacion de formularios dentro de React Js:</p>
          <ul>
            <li>Formularios con inputs no controlados.</li>
            <li>Formularios con inputs controlados (cada input necesita su propio estado).</li>
          </ul>
          <p>Para poder trabajar manejando los inputs de mi formulario de manera controlada tengo dos opciones, aplicar una o la otra depende de la cantidad de input que solicite al usuario a traves de mi UI.</p>
          <ul>
            <li>Si mi formulario tiene menos de 6 inputs seria suficiente con setear un estado para cada input de mi formulario</li>
            <li>En caso de mi formulario tenga mas de 6 inputs, lo mas adecuado seria poder setear un estado al que envie la info de mis inputs de forma dinamica</li>
          </ul>


          {/* <FormA/>
            <FormB/> */}
        </Card.Text>

        <Card.Title>Como traer data desde un componente hijo a un componente padre.</Card.Title>
        <Card.Text>
          <p>Siempre que hacemos un addEventListener sobre un elemento este queda guardado en la memoria. Para eliminarlo hay que remover el EventListener.</p>
          <p>STATE UPLIFTING - State Uplifting es el metodo usado para enviar informacion de un componente hijo a un componente padre. El metodo funciona como las PROPS pero no son PROPS! Las PROPS sirven únicamente para pasar data de PADRE a HIJO.</p>
          <p>Recordemos que en JS al momento de declarar una funcion, el argumento con el que trabajara dicha funcion sera desconocido hasta que, hagamos efectiva la ejecusion de la funcion asignandole un parametro, 'parametro' que sera recibido por la funcion como un 'argumento' y lo usara para ejecutar la logica que contenga.</p>
          <p>Si podemos enviar informacion desde un Componente Hijo a un Componente Padre esto me permite por ejemplo ejecutar funciones con el uso de condicionales if/ else y /o condicionales ternarios para poder crear funciones condicionales.</p>
          <p>STOP PROPAGATION - Ejemplo del uso de Stop Propagation con un Boton de Favoritos</p>
        </Card.Text>

        <Card.Title>Scroll hacia arriba cuando hay un cambio de URL</Card.Title>
        <Card.Text>'https://dev.to/kunalukey/scroll-to-top-when-route-changes-reactjs-react-router-3bgn'</Card.Text>
      </Card.Body>
    </Card>

  )
}

export default ClaseNueve