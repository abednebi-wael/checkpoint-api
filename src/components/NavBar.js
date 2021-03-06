import React from 'react';
import { Navbar ,Container , Nav , Form , Button ,FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
    <nav>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Users List</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link> <Link to={'/'}>Home</Link></Nav.Link>
        <Nav.Link > <Link to={'/TodoList'}> Users</Link> </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </nav>
      );
}

export default NavBar;