import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
export default function CustomeNavbar() {
  return (
   <>
   <Navbar  fixed="top" expand="lg"   className="bg-body-tertiary justify-content-between " >
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-uppercase '>
          <span className='d-flex flex-row justify-content-center align-items-center gap-2'><img src='src/assets/icons/Logos.svg'/> Shopping</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 d-flex flex-row justify-content-center align-items-center fw-bold ">
            <span className='d-flex me-5 gap-4 '>
            <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/shop'}>Shop</Nav.Link>
            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
            </span>
            <span className='d-flex gap-2'>
            <Nav.Link as={Link} ><img src='src\assets\icons\user.svg' /></Nav.Link>
            <Nav.Link as={Link} ><img src='src\assets\icons\search.svg' /></Nav.Link>
            <Nav.Link as={Link} ><img src='src\assets\icons\like.svg' /></Nav.Link>
            <Nav.Link as={Link} ><img src='src\assets\icons\shop.svg' /></Nav.Link>
            
            </span>
          
            
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  
   </>
  )
}
