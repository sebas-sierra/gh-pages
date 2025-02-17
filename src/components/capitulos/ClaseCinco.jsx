import React, { useState } from 'react';
import { Badge, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ClaseCinco = ({ onAdd}) => {
    const [ cantidad, setCantidad ] = useState(1);
    const [ stock, setStock ] = useState(20);
    
    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    };

    const reset = () => {
        setCantidad(1);
    };

  return (
    
        <Card className="mb-2">
            <Card.Header><Badge pill bg="secondary">Clase Nº 5 </Badge><h1>Componentes II - Estados y Ciclos de vida</h1></Card.Header>
            <Card.Body>
                <Card.Title>Introduccion a Eventos en React</Card.Title>
                <Card.Text>
                    <ul>
                        <li>Todos los eventos van con 'camelCase'</li>
                        <li>Cuando tengo que pasar parametros dentro de un elemento HTML en un evento onClick, si o si es necesario poner un callBack a la funcion para evitar su ejecusion automatica. Si no se necesita pasar parametros a la funcion, entonces no hay que usar callBack.</li>
                    </ul>
                </Card.Text>

                <Card.Title>Estados en React / Hook useState</Card.Title>
                <Card.Text>
                    <ul>
                        <li>Los estados van a permitirme persistir informacion dentro de un componente mientras este visible en pantalla o hasta que actualice mi navegador. Cada componente posee como una especie de memoria interna, distinta al localStorage o una base de datos.</li>
                        <li>Cada vez que haya un cambio de estado, un cambio de prop o un evento que dispare un cambio de estado o de prop mi componenete se volvera a renderizar y el estado volvera a su configuracion inicial.</li>
                        <li>Para modificar un elemento de mi componente con una interaccion, debemos asignar un estado al elemento para que refleje la modificacion para esto usamos el hook useState(). Dicha modificacion se hace usando la funcion seteadora 'setState' que hace de puente entre nuestra funcion y el estado de mi elemento.</li>
                    </ul>
                </Card.Text>
                
                <Card.Title>Como hacer uso del hook useState</Card.Title>
                <Card.Text>
                    <ul>
                        <li>
                            <p>Para hacer uso del hook useState hay que importarlo dentro del header del componente donde va a ser implementado (Este hook siempre nos retornara un valor y una funcion que se usa para setear el estado).</p>
                            <code>import &#123; useState &#125; from 'React';</code><br /><br /> 
                        </li>
                        <li>
                        <p>Para declarar el valor inicial de nuestro estado usamosla siguiente estructura de codigo:</p>
                        <code> const &#91; nombre-de-mi-estado, setNombre-de-mi-estado &#93; = useState('valor-inicial-de-mi-estado');</code> <br /><br />
                        </li>
                        <li>
                        <p>Ahora podemos usar el seter del estado dentro de una funcion para actualizarlo:</p>
                        <code> const actualizarEstado = () =&#62; &#123; <br />setNombre-de-mi-estado ('mi-estado-actualizado') <br /> &#125;;</code> <br /><br />
                    <p>De esta manera al ejecutar la funcion 'actualizarEstado' el nuevo valor de 'nombre-de-mi-estado' pasara de ser 'valor-inicial-de-mi-estado' a 'mi-estado-actualizado'.</p>
                        </li>
                    </ul>
                    
                    
                    
                    
                </Card.Text>
                <Card.Title>Ejemplo Contador</Card.Title>
                <InputGroup className="mb-3">
                    <Button disable={cantidad === stock} onClick={sumar} variant="outline-secondary">+</Button>
                    <Button onClick={reset} variant="outline-secondary">Reset</Button>
                    <Button onClick={restar} variant="outline-secondary">-</Button>
                    
                    <InputGroup.Text>Cantidad:</InputGroup.Text>
                    <Form.Control
                        placeholder={cantidad}
                        aria-label="Recipient's username with two button addons"
                    />
                    
                    {/* <Button onClick={() => { onAdd(cantidad) }} variant="outline-secondary">Agregar al carrito</Button> */}
                </InputGroup>
                
                <Card.Text>
                    <p>Los componentes y sus ciclos de vida, esto abarca el proceso a traves del cual un componente se monta (se renderiza en pantalla), se actualiza (se vuelve a renderizar debido a un cambio de PROP o de estado) y se desmonta.</p>
                </Card.Text>
                
                {/* <EjemploState/> */}
                <Card.Title>Como hacer uso del hook useEffect</Card.Title>
                <Card.Text>
                    <p>Este Hook nos sirve para ejecutar codigo despues del primer renderizado de mi componente, su funcionamiento es similar al metodo 'asincronia' de JS, pero no lo es. Me sirve para escribir codigo que se tienen que ejecutar en segunda instancia, es decir luego del primer renderizado del return de mi componente se lee el codigo dentro del useEffect.</p>
                    <p>El Hook useEffect() recibe dos parametros:</p>
                    <ul>
                        <li>uno es una funcion de callBack</li>
                        <li>y el otro (que puede ir o no) es un array de dependencias, que puede estar vacio o no. Existen tres formas de utilizar el array de dependencias:
                            <ul>
                                <li>Si el array NO EXISTE, la funcion callBack se ejecuta despues del primer renderizado y cada vez que se renderize el componente.</li>
                                <li>Si el Array esta vacio se ejecutara solo UNA vez. Se renderiza mi componente y luego se ejecuta mi useEffect, esto no resulta util para hacer llamadas a APIs externas.</li>
                                <li>Y si el array de dependencias incluye la dependencia, entonces se ejecutara cada vez que detecte un cambio de estado en ella.</li>
                            </ul>
                        </li>
                    </ul>
                    <code>useEffect( () =&#62; &#123; &#125;, &#91;  &#93;)</code><br /><br />
                    <p>Todo el codigo dentro del hook useState ejecuta despues del render de mi componente, se comporta como algo similar a las llamadas asincronicas</p>
                </Card.Text>
            </Card.Body>
        </Card>
    
  )
}

export default ClaseCinco