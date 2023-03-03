/* import Container from 'react-bootstrap/Container';
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
} */
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import Lista from "./lista";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LoginIcon from '@mui/icons-material/Login';
import { Box } from "@mui/system";

const navLinks=[
    {
        title:"Inicio",
        path:"#Inicio",
        icon:<HomeIcon/>,
    },
    {
        title:"Productos",
        path:"#Productos",
        icon:<CheckroomIcon/>,
    },
    {
        title:"Login",
        path:"#Login",
        icon:<LoginIcon/>,
    },
]

export default function Barra(){
    
    const [open,setOpen]= useState(false)

    return(
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton 
                        color="inherit" 
                        size="large" 
                        onClick={()=> setOpen(true)}
                        sx={{display:{xs:"flex",sm:"none"}}}
                    >
                    <MenuIcon/>
                    </IconButton>
                    <Typography 
                        variant="h6" 
                        sx={{flexGrow:1}}
                    >
                        MALKA
                    </Typography>
                    <Box
                        sx={{display:{xs:"none",sm:"block"}}}
                    >
                        {
                            navLinks.map(item=>(
                                <Button 
                                    color="inherit" 
                                    key={item.title}
                                    component="a"
                                    href={item.path}
                                >
                                    {item.title}
                                </Button>
                            ))
                        }
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer open={open} anchor="left" onClose={()=> setOpen(false)} sx={{display:{xs:"flex",sm:"none"}}}>
                <Lista navLinks={navLinks}/>
            </Drawer>
        </>
    )
}