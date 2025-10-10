import React, { useContext, useState , useEffect } from 'react';
import { Container, Form, Nav, Navbar, NavDropdown,  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartWidget from './CartWidget';
import { ThemeContext } from '../context/ThemeContext';
import { CartContext } from '../context/CartContext';


const NavBar = () => {
  const { theme, handleTheme, texts, handleLanguage } = useContext(ThemeContext)
  const themeMode = theme === 'light' ? 'light' : 'dark';
  const [ show, setShow ] = useState(false);
  const { totalUnidades } = useContext(CartContext)
    useEffect (() => {
        if (totalUnidades() > 0) {
          setShow(true)
        } else {
          setShow(false)
        }
      }, [totalUnidades])
  
  return (
    /*<Navbar expand='lg' className={isInHeader ? 'bg-body-tertiary' : 'footer'}>*/
    <Navbar fixed="top" className={theme} expand='lg' mb-2 >
      <Container>
        {/* comentada la navbrand <Navbar.Brand href='/gh-pages/#/'>{texts.headerTitle}</Navbar.Brand> */}
        <Navbar.Toggle aria-controls='navbarScroll' >
          <FontAwesomeIcon icon="fa-solid fa-fire" className='fa-2x' />
        </ Navbar.Toggle>
        <Navbar.Collapse id='navbarScroll' >
          <Nav className='me-auto' navbarScroll>
            {/* <Nav.Link href='/pokeapi'>PokeApi</Nav.Link> */}
            {/* <Nav.Link href='/gh-pages/#/resume'>Curriculum Vitae</Nav.Link> */}
            <Nav.Link href='/gh-pages/#/'>Curriculum Vitae</Nav.Link>
            <Nav.Link href='/gh-pages/#/capitulos/prod'>Store</Nav.Link>
            
            <NavDropdown title='Apuntes React' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='/gh-pages/#/capitulos/claseuno'>Clase 1 / Intro</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasedos'>Clase 2 / Crear proyecto</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasetres'>Clase 3 / Archivos y librerias</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasecuatro'>Clase 4 / Props y children</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasecinco'>Clase 5 / Estados y ciclos de vida</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/gh-pages/#/capitulos/claseseis/productos'>Clase 6 / Promises</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasesiete'>Clase 7 / APIs</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/claseocho'>Clase 8 / Rutas</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasenueve'>Clase 9 / Eventos</NavDropdown.Item>
              {/* <NavDropdown.Item href='/gh-pages/#/capitulos/prod'>Productos</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/prod/category/furniture'>Furniture</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/prod/category/decoracion'>Decoracion</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/prod/category/mesas'>Mesa</NavDropdown.Item>
              <Link to={'/capitulos/prod/category/furniture'} >Furniture</Link>
              <Link to={'/capitulos/prod/category/decoracion'} >Decoracion</Link>
              <Link to={'/capitulos/prod/category/mesas'} >Mesas</Link> */}
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasediez'>Clase 10 / Context</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/claseonce'>Clase 11 / Rendering condicional</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasedoce'>Clase 12 / Firebase 1</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasetrece'>Clase 13 / Firebase 2</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasecatorce'>Clase 14 / Workshop</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/gh-pages/#/capitulos/glosario'>Glosario</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/imagenesrs'>Redes Sociales</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/customhooks'>Custom Hooks</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/desinstalarvsc'>Desinstalar VSC</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/githubpages'>GitHub-Pages</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title='Trabajos destacados' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/gh-pages/#/trabajos/detaller'>De-Taller</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/trabajos/prode'>Prode</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/trabajos/blueberries'>Blueberries</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/trabajos/bnm'>BNM</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/trabajos/ilustracion'>Ilustracion</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/trabajos/editorial'>FrontEnd</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/trabajos/waterclor'>Producto</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href='/gh-pages/#/capitulos/recursos'>Recursos</Nav.Link>
            
            

            {/* <input type="radio" name="theme" id="light" onClick={handleTheme} value="light"/>
            <label htmlFor="light">Claro</label>

            <input type="radio" name="theme" id="dark" onClick={handleTheme} value="dark" />
            <label htmlFor="dark">Oscuro</label> */}

            {/* {isInHeader 
            &&<Nav.Link href='/cart'>
              <CartWidget></CartWidget>
              </Nav.Link>
            } */}



          </Nav>
          <Nav>
            <Form.Select size="sm" name="language" onChange={handleLanguage}> 
              <option value="esp">esp</option>
              <option value="eng">eng</option>
            </Form.Select>
            <Form >
              <Form.Check inline className='form-check-inline-menu' type="switch" name="theme" id="light" onClick={handleTheme} value="light" label={`${themeMode}`}/>
            </Form>
            {show ? <CartWidget/> : <h4> </h4>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar