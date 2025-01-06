import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ClaseCuatro = () => {
  return (
    <Col sm={8}>
      <Card className="mb-2">
        <Card.Header>CLASE 4 - Componentes I - Props</Card.Header>
        <Card.Body>
          <Card.Title>La principal ventaja de React</Card.Title>
          <Card.Text>
            <p>La principal ventaja al momento de trabajar con React es la posibilidad que nos da de crear aplicaciones completas de manera modular gracias al uso de COMPONENTES sin importar que sean de mediana o alta complejidad. Esto es lo que se conoce como 'Diseño Modular', es decir que los componentes nos permiten separar la intefaz de usuario en piezas independientes, reutilizables y pensar en cada componente de forma aislada.</p>
            <p>Siguiendo esta idea general podriamos diseñar un componente boton,un componente input, un componente para cada pieza que necesite en mi aplicacion. De esta manera terminamos dando forma a un conjunto de componentes que interactuan entre si para dar forma a nuestra app. Ademas tener la logica de estado y los elementos visuales por separado, es mas facil reutilizar los componentes.</p>
            <p>Cada componente debe tener una unica tarea.</p>
          </Card.Text>
          <Card.Title>Dos tipos de componentes</Card.Title>
          <Card.Text>Podemos diferenciar dos tipos de componentes:
            <ul>
              <li>Componentes Presentacionales - Son los orientados a todo lo relacionado con el aspecto visual. No manejan estados ni logica.</li>
              <li>Componentes Contenedores - Suelen manejar estados, funciones, proporcionar props a otros componentes. Manejan la logica de la aplicacion.</li>
            </ul>
          </Card.Text>
          <Card.Title>Dos formas de enviar datos a los componentes: PROPS y CHILDREN</Card.Title>
          <Card.Text>
            <p>Todos los componentes pueden enviar enviar y recibir PROPS de otro componente, las PROPS nos sirven para dividir el codigo y generar la logica de funcionamiento de nuestra aplicacion.</p>
            <p>Recordar que al igual que en JS puedo pasar informacion a las funciones usando los parametros, en React puedo pasar info/ data a los Componentes usando PROPS .</p>
            <p>Una PROP es un valor que se envia a un componente, es un par KEY - VALUE, en KEY coloco el nombre que le voy a dar a mi PROP y en VALUE le asigno el valor que va a guardar esa KEY.</p>
            <p>A traves de una PROP puedo enviar a mi componente:</p>
              <ul>
                <li>array</li>
                <li>objeto</li>
                <li>funcion</li>
                <li>boleano</li>
                <li>numero</li>
                <li>string</li>
                <li>componentes</li>
              </ul>
            <p>Indistintamente del tipo de dato que envie usando props siempre voy a recibir un objeto del otro lado.</p>
            <code>
              PROPS <br /> Por ejemplo de como hacer un header y un footer con el mismo componente y un condicional para enviar distintas props
            </code>
          </Card.Text>
          <Card.Text>
            <p>Otra forma de compartir datos de un componente a otro dentro de mi aplicacion es haciendo uso de los children.</p> <p>Cuando utilizo un componente para envolver otros elementos, es decir abriendo y cerrando el componente por ej: <code>&lt;contenedor&gt; &lt;p&gt; &lt;/p&gt; &lt;/contenedor&gt;</code> estos elementos llegan automaticamente al componente contenedor como una prop llamada CHILDREN. 'Children' es una palabra reservada de React.</p>
            <p>Este concepto es importante para trabajarhaciendo uso de Context, un tema que se trata deplenoen la CLASE 10 </p>
          </Card.Text>
          <Card.Title>Como usar iconos en React</Card.Title>
          <Card.Text>
            <ul>
              <li>Desde GoogleFonts podemos usar iconos sin necesidad de instalar ninguna libreria. Solo hay que copiar el link de google en el header del index.html y el icono en donde necesitemos usarlo.</li>
              <li>La otra opcion es intalar una libreria por ejemplo react-icons o font-awesome. Para esto es necesario instalar la libreria desde la consola. Luego de la instalacion, hay que importar el icono que vayamos a usar dentro del componente en que lo necesitemos y por ultimo llamar al icono como si fuese un componente.</li>
            </ul>
          </Card.Text>
          <Card.Title>Como usar imagenes en React</Card.Title>
          <Card.Text>
            <ul>
              <li>La primer opcion es usando una ruta remota con la etiqueta img <code> &lt;img src= "http://insertar-link-a-la-imagen-deseada"/&gt;</code></li>
              <li>La segunda opcion es usando imagenes alojadas en la carpeta 'public', en este caso llamo a la imagen como si estuviese parado dentro de la carpeta public <code> &lt;img src= "Nombre-de-la-imagen-deseada"/&gt;</code></li>
              <li>La tercer opcion es usando una carpeta dentro del recurso src (ruta local). Lo primero es importar la imagen dentro del componente en el que la vamos a usar indicando la ruta de origen y asignandole un nombre <code>import nombre-asignado-a-mi-img from '../../img/mi-img.png'</code> y para implementarla dentro de la app la llamamos como <code>&lt;img src= 'nombre-asignado-a-mi-img' alt=""/&gt;</code>.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ClaseCuatro