import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    /*<Navbar expand='lg' className={isInHeader ? 'bg-body-tertiary' : 'footer'}>*/
    <Navbar expand='lg'>
    <Container>
      <Navbar.Brand href='/gh-pages/#/'>Menu de la store</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='/pokeapi'>PokeApi</Nav.Link>
          <Nav.Link href='/itemdetail'>ItemDetail</Nav.Link>
          <Nav.Link href='/gh-pages/#/capitulos/imagenesrs'>Redes Sociales</Nav.Link>
          <NavDropdown title='Clases' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/gh-pages/#/capitulos/clasetres'>Clase 3</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/clasecuatro'>Clase 4</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/clasecinco'>Clase 5</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href='/gh-pages/#/capitulos/claseseis/productos'>Clase 6</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/clasesiete'>Clase 7</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/claseocho'>Clase 8</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/clasenueve'>Clase 9</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/prod'>Productos</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/clasediez'>Clase 10</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/claseonce'>Clase 11</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/clasedoce'>Clase 12</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/clasetrece'>Clase 13</NavDropdown.Item>
            <NavDropdown.Item href='/gh-pages/#/capitulos/clasecatorce'>Clase 14</NavDropdown.Item>
          </NavDropdown>

          {/* {isInHeader 
          &&<Nav.Link href='/cart'>
              <CartWidget></CartWidget>
              </Nav.Link>
           } */}

          

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar