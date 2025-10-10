import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ClaseDos = () => {
  const codeString1=`node --version o node -v`;
  const codeString2=`~ cd -desktop`;
  const codeString3=`npm i -g create-react-app`;
  const codeString4=`sudo npm i -g create-react-app`;

  const codeString5=`cd folder-name`;
  const codeString6=`npx  create-react-app my-app-name`;
  const codeString7=`cd my-app-name`;
  const codeString8=`npm start`;
  return (
    
    <Card className="mb-2">
      <Card.Header className='apuntes-react'><Badge pill bg="dark">Clase Nº 2 </Badge><h1>Como crear un proyecto en React</h1></Card.Header>
      
      <Card.Body>
        <Card.Title>Etapas que interfieren en el funcionamiento de ReactJs </Card.Title>
        <p>1- primer paso Diffing, React analiza el codigo antes y luego de una modificacion haciendo un relevamiento de las diferencias.</p>
        <p>2- Segundo paso Reconciliacion, en este paso React hace un merge tomando los cambios en codigo modificado y los añade al codigo original (lo actualiza ).</p>
        <p>Tener en cuenta que ReactJs trabaja dentro de el entorno de NODE, por lo que vamos a necesitar tener instalado NODEJs y NPM (NodePackageManager) que nos va a permitir instalar y desinstalar librerias.</p>
        <p>En cualquier consolo podemos checkear la version de Node instalada corriendo el comando:</p>
        <SyntaxHighlighter language="javascript" style={atomOneDark} className='highlighterstyles'> 
          {codeString1} 
        </SyntaxHighlighter> 
        
        <Card.Title>Crear una aplicacion de ReactJs utilizando CLI (Command Lines Interface)</Card.Title>
        <p>CLI es un metodo que nos permite, mediante el uso de una linea de codigo, darle ordenes a ReactJs como por ejemplo: La creacion de un nuevo proyecto.</p>
        <ul>Para proceder con la instalacion tenemos dos opciones:
          <li>1- Para el primer metodo de instalacion necesitamos instalar el CLI de ReactJs de manera global ejecutando codigo desde la terminal.<br/>
          <ul>
            <li>a- Abrimos la consola terminal.</li>
            <li>b- Para poder interactuar con ReactJs necesitamos instalar el CLI de ReactJs de manera global. No importa en que carpeta nos ubiquemos para ejecutar este codigo, es indistinto porq la instalacion sera a nivel global. Para acerlo ejecutamos este codigo dentro del terminal para ubicarnos en el escritorio:
              <SyntaxHighlighter language="javascript" style={atomOneDark} className='highlighterstyles'>
                {codeString2}
              </SyntaxHighlighter>
              
              una vez que el codigo se ejecute nos ubicara dentro del directorio indicado para instalar el CLI de React y a través de manipulación poder enviarle instrucciones, como por ejemplo que nos cree un proyecto.
              <SyntaxHighlighter language="javascript" style={atomOneDark} className='highlighterstyles'>
                {codeString3}
              </SyntaxHighlighter> 
          
              en caso que estemos haciendo la instalacion en una Mac es posible que tengamos un error durante la ejecusion del proceso debido a un problema de permisos. Para solucionarlo agregamos la palabra <code>sudo</code> delante del codigo y lo volvemos a intentar
              <SyntaxHighlighter language="javascript" style={atomOneDark} className='highlighterstyles'>
                {codeString4}
              </SyntaxHighlighter>
          
              de esta forma la consola terminal nos pedira confirmar la instalacion ingresando nuestra contraseña.
              Al completar la instalacion la consola nos notificara de tener 'high severity vulnerabilities' pero lo mas importante es no tener ningun mensaje de error.<br/><br/><br />
            </li>
            <li>c- El siguiente paso, es crear nuestro proyecto para esto usamos el siguiente codigo indicando el nombre del proyecto<code> create-react-app my-app</code> no es necesario crear una carpeta donde alojarlo pero si es importante estar ubicado dentro del directorio que lo contendra, es decir, ejecutar el codigo desde la ubicacion donde se creara la carpeta con el proyecto.<br/><br />
        Como alternativa podemos abrir directamente la carpeta desde la interfaz del VSC (VisualStudioCode). Necesitamos estar dentro de la carpeta del proyecto porque es la unica manera en que vamos a poder manipular la aplicacion. Dentro de la carpeta que se crea vamos a encontrar un archivo llamado <code>package.json</code>, dentro de este archivo vamos a encontrar los comandos necesarios para manipular el proyecto. <br/><br />
        Ahora podemos ejecutar <code>npm start</code> en la terminal de la consola y si todo funciona correctamente vamos a ver nuestro proyecto corriendo en el navegador.</li>
          </ul>
        </li>
        

        <li>2- El segundo metodo NPX (todo en un solo comando) es el metodo recomendado en la documentacion oficial de ReactJs.<br/><br />
        <ul>
          <li>a- primero nos posicionamos en la carpeta donde crearemos el proyecto
            <SyntaxHighlighter language="javascript" style={atomOneDark} className='highlighterstyles'>
              {codeString5}
            </SyntaxHighlighter>
            {/* <code>cd folder-name</code><br /><br /> */}
          </li>
          <li>b- Creamos el proyecto ejecutando:<br/>
            <SyntaxHighlighter language="javascript" style={atomOneDark} className='highlighterstyles'>
              {codeString6}
            </SyntaxHighlighter>
          {/* <code>npx  create-react-app my-app-name</code><br /><br /> */}
          </li>
          <li>c- Una vez creado el proyecto, entramos a la carpeta que lo contiene<br/>
            <SyntaxHighlighter language="javascript" style={atomOneDark} className='highlighterstyles'>
              {codeString7}
            </SyntaxHighlighter>
            {/* <code>cd my-app-name</code><br /><br /> */}
            Para inicializar el proyecto y poder previsualizarlo en el navegador corremos el comando:<br/>
            <SyntaxHighlighter language="javascript" style={atomOneDark} className='highlighterstyles'>
              {codeString8}
              </SyntaxHighlighter>
            {/* <code>npm start</code><br /><br /> */}
            </li>
        </ul>
        
        Con este metodo omitimos la instalacion del CLI de ReactJs en nuestro equipo sino que directamente lo ejecutamos. Recordar que los nombres asignados no pueden tener letras mayusculas, esto arroja un error al momento de crear el proyecto.</li>
      </ul>
      <Card.Title>Compartir un proyecto usando GitHub</Card.Title>
      <Card.Text>
      <p>Al momento de ejecutar <code>create-react-app</code> se crea de forma automatica un repositorio local de GitHub y ademas se crea un archivo <code>.gitignore</code> En este archivo se indican cuales son las carpetas y archivos que seran omitidas al momento de hacer una actualizacion del repositorio online.</p>
      <p>Ahora por ejemplo podemos frenar la consola con el codigo <code>^C</code> (tecla Control+C) y podemos verificar el estado de git ejecutando: <code>git status</code></p>
      <p>En caso que el editor (VSC o el que estemos usando) no reconozca los comandos git, quiere decir que git no se ha instalado. Para solucionarlo toca correr el codigo <code>git init</code> de esta forma generamos un repositorio local de forma manual para nuestro proyecto.</p>
      <p>Ya con repositorio local preparado, creamos un repositorio remoto en GitHub usando nuestra cuenta. En este nuevo repositorio vamos a subir nuestro proyecto y sus posteriores actualizaciones. Una vez tengamos los dos repos (local y remoto) listos, toca frenar la consola con el comando <code>^C</code> para poder interactuar con git.</p>
      <ul>
        <li>a- <code>git add .</code> con este comando ponemos en stage los archivos que enviaremos al repositorio remoto</li>
        <li>b- <code>git commit -m 'mensaje-acerca-del-commit'</code> indicamos un textos de referencia a la actualizacion que vamos a hacer</li>
        <li>c- Este paso se realiza por unica vez con cada proyecto en el que estemos trabajando, se trata de la vinculacion del repositorio local con el repositorio remoto a travez del comando donde indicamos la url del repositorio remoto <code>git remote add origin https://...</code></li>
        <li>d- <code>git push -u origin nombre-de-la-rama</code> ahora toca hacer efectiva la actuaizacion del proyecto indicando el nombre de la rama donde estamos trabajando. </li>
      </ul>
      </Card.Text>
      </Card.Body>
    </Card>
    
  )
}

export default ClaseDos