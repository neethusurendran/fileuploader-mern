import React from 'react'
import{Form,FormControl,Nav,Navbar,NavDropdown,Container} from 'react-bootstrap'
import './header.css';
import {Link} from "react-router-dom";
function Header() {
    return (
        <Navbar bg="primary" expand="lg" variant="light">
        <Container className="nav_header" >
          <Navbar.Brand> 
            <Link to='/'>FILE DOWNLOADER</Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Form inline>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
             
            </Form>
              </Nav>
            <Nav>
              <Nav.Link href="/myfiles">
                <Link to="/myfiles">My Files </Link></Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
                <NavDropdown.Divider />
               
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
