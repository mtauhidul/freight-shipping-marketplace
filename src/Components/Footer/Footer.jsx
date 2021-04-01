import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => (
    <Container fluid className={styles.footerContainer}>
        <Container className={styles.footerWrapper}>
            <Row className={styles.linksSection}>
                <Col md={5}>
                    <div className={styles.comLogo}>
                        <h3>Company Logo</h3>
                    </div>
                    <div className={styles.comInfo}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            perspiciatis ex enim impedit assumenda. Libero consectetur dolorum esse
                            maxime cupiditate.
                        </p>
                    </div>
                </Col>
                <Col md={1} />
                <Col md={2} className={styles.linkCol}>
                    <div>
                        <ul>
                            <li>
                                <p>
                                    <strong>Company</strong>
                                </p>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/">Support</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={2} className={styles.linkCol}>
                    <div>
                        <ul>
                            <li>
                                <p>
                                    <strong>Freight</strong>
                                </p>
                            </li>
                            <li>
                                <Link to="/">Shipper</Link>
                            </li>
                            <li>
                                <Link to="/">Carrier</Link>
                            </li>
                            <li>
                                <Link to="/">Listing</Link>
                            </li>
                            <li>
                                <Link to="/">Registration</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={2} className={styles.linkCol}>
                    <div>
                        <ul>
                            <li>
                                <p>
                                    <strong>Business</strong>
                                </p>
                            </li>
                            <li>
                                <Link to="/">Policy</Link>
                            </li>
                            <li>
                                <Link to="/">Terms</Link>
                            </li>
                            <li>
                                <Link to="/">Payment</Link>
                            </li>
                            <li>
                                <Link to="/">Subscription</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className={styles.socialWrapper}>
                    <Link to="/">
                        <img
                            src="https://img.icons8.com/ios-filled/48/000000/linkedin.png"
                            alt="in"
                        />
                    </Link>
                    <Link to="/">
                        <img
                            src="https://img.icons8.com/ios-filled/48/000000/facebook--v1.png"
                            alt="fb"
                        />
                    </Link>
                    <Link to="/">
                        <img
                            src="https://img.icons8.com/ios-filled/48/000000/email-open.png"
                            alt="email"
                        />
                    </Link>
                    <Link to="/">
                        <img
                            src="https://img.icons8.com/ios-filled/48/000000/imessage.png"
                            alt="chat"
                        />
                    </Link>
                </div>
            </Row>
        </Container>
        <Row>
            <div className={styles.copyrightSection}>
                <p>All rights reserved © 2021 Company® Name .</p>
            </div>
        </Row>
    </Container>
);

export default Footer;
