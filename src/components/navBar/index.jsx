
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget';
import './index.css'
import logo from '../img/logo-malka-redondo.png'

export default function Barra(){
    
    return(
        <Navbar className='background' expand="md">
            <Container fluid>
                <Navbar.Brand href="#"><img src={logo} alt="MALKA" style={{width:"75px"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#Inicio">Inicio</Nav.Link>
                        <NavDropdown className='mb-2' title="Productos" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#Calzas">Calzas</NavDropdown.Item>
                        <NavDropdown.Item href="#Bikers">Bikers</NavDropdown.Item>
                        <NavDropdown.Item href="#Shorts">Shorts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget cantidad="3"/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}
