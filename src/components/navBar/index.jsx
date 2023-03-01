
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget';
import './index.css'

export default function Barra(){
    
    return(
        <Navbar className='background' expand="md">
            <Container fluid>
                <Navbar.Brand href="#">loguito</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <NavDropdown className='mb-2' title="Productos" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action2">Calzas</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Bikers</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Shorts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget cantidad="3"/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        /* <Navbar className='background' expand="md">
            <Container fluid>
                <Navbar.Brand href="#home">MALKA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><CartWidget cantidad="3"/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */
    )
}
