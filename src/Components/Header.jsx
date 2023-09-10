import React from 'react';
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar expand="xl" className="bg-body-tertiary">
        <Container fluid>
          <div className={styles.logo}>
            <Navbar.Brand href="#">
              <img className={styles['headers-logo']} src="/images/comp-logo.png" />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#homepage1">Home</Nav.Link>
                <Nav.Link href="#Company-profile">Company Profile</Nav.Link>
                <Nav.Link href="#our-mission">Our mission</Nav.Link>
                <Nav.Link href="#our-vision">Our Vision</Nav.Link>
                <Nav.Link href="#company-facility">Company Facility</Nav.Link>
                <Nav.Link href="#entry-profile">Entry Profile</Nav.Link>
                <Nav.Link href="#Income-profile">Income Profile</Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header