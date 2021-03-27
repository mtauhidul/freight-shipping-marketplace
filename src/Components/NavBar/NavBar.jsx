import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import styles from './NavBar.module.css';

const NavBar = () => {
    if (document.querySelector('.navBar')) {
        const mrToggler = document.getElementById('mrToggler');

        mrToggler.addEventListener('click', () => {
            console.log('OK');
        });
    }

    return (
        <Navbar className={styles.navBar} collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid="md">
                <Navbar.Brand href="#home"> COMPANY LOGO</Navbar.Brand>
                <Navbar.Toggle id={styles.mrToggler} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className={styles.centerify} id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Shipper</Nav.Link>
                        <Nav.Link href="/">Carrier</Nav.Link>
                        <Nav.Link href="/">Quotes</Nav.Link>
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/">Contact</Nav.Link>
                        <Nav.Link href="/">
                            <Button className={styles.btnOutPrimary} variant="outline-primary">
                                SIGN IN
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
