import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <Container fluid="md" className={styles.NavWrapper}>
                <Navbar.Brand as={Link} to="/">
                    {' '}
                    COMPANY LOGO
                </Navbar.Brand>
                <Navbar.Toggle id={styles.mrToggler} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className={styles.centerify} id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link to="/">Shipper</Nav.Link>
                        <Nav.Link to="/">Carrier</Nav.Link>
                        <Nav.Link to="/">Quotes</Nav.Link>
                        <Nav.Link to="/">About</Nav.Link>
                        <Nav.Link to="/">Contact</Nav.Link>
                        <Nav.Link to="/auth">
                            <Button
                                as={Link}
                                to="/auth"
                                className={styles.btnOutPrimary}
                                variant="outline-primary"
                            >
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
