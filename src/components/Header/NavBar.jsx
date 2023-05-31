import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const NavBar = () =>{

    return (
       <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tienda Ropa Rapa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Tienda</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            
          </Nav>
          <Nav>
          
            <Nav.Link href="#memes">

            <Button variant="primary">
            Carrito de Compras <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">Artculos en carrito</span>
            </Button>

            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </>
    )
}

export default NavBar