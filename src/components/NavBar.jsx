import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from  'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { ThemeContext } from '../context/ThemeContext';


const NavBar = () => {
  const { theme, handleTheme, texts, handleLanguage } = useContext(ThemeContext)
  return (
    /*<Navbar expand='lg' className={isInHeader ? 'bg-body-tertiary' : 'footer'}>*/
    <Navbar className={theme} expand='lg'>
      <Container>
        <Navbar.Brand href='/gh-pages/#/'>{texts.headerTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/pokeapi'>PokeApi</Nav.Link>
            <Nav.Link href='/itemdetail'>ItemDetail</Nav.Link>
            <Nav.Link href='/gh-pages/#/capitulos/imagenesrs'>Redes Sociales</Nav.Link>
            <Nav.Link href='/gh-pages/#/capitulos/desinstalarvsc'>Desinstalar VSC</Nav.Link>
            <NavDropdown title='Clases' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasetres'>Clase 3</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasecuatro'>Clase 4</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasecinco'>Clase 5</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/gh-pages/#/capitulos/claseseis/productos'>Clase 6</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasesiete'>Clase 7</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/claseocho'>Clase 8</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasenueve'>Clase 9</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/prod'>Productos</NavDropdown.Item>

              <NavDropdown.Item href='/gh-pages/#/capitulos/prod/category/furniture'>Furniture</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/prod/category/decoracion'>Decoracion</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/prod/category/mesas'>Mesa</NavDropdown.Item>
              <Link to={'/capitulos/prod/category/furniture'} >Furniture</Link>
              <Link to={'/capitulos/prod/category/decoracion'} >Decoracion</Link>
              <Link to={'/capitulos/prod/category/mesas'} >Mesas</Link>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasediez'>Clase 10</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/claseonce'>Clase 11</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasedoce'>Clase 12</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasetrece'>Clase 13</NavDropdown.Item>
              <NavDropdown.Item href='/gh-pages/#/capitulos/clasecatorce'>Clase 14</NavDropdown.Item>
            </NavDropdown>
            <Form.Select size="sm" name="language" onChange={handleLanguage}> 
              <option value="esp">esp</option>
              <option value="eng">eng</option>
            </Form.Select>
            <Form>
            <Form.Check inline type="switch" name="theme" id="light" onClick={handleTheme} value="light" label={'claro'}/>
            <Form.Check inline type="switch" name="theme" id="dark" onClick={handleTheme} value="dark" label={'oscuro'}/>
            </Form>

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
        </Navbar.Collapse>
        <CartWidget/>
        
      </Container>
    </Navbar>
  )
}

export default NavBar