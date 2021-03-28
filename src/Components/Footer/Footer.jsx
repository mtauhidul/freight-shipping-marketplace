import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
                    <ul>
                        <li>
                            <p>
                                <strong>Company</strong>
                            </p>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                        <li>
                            <a href="/">FAQ</a>
                        </li>
                        <li>
                            <a href="/">Support</a>
                        </li>
                    </ul>
                </Col>
                <Col md={2} className={styles.linkCol}>
                    <ul>
                        <li>
                            <p>
                                <strong>Freight</strong>
                            </p>
                        </li>
                        <li>
                            <a href="/">Shipper</a>
                        </li>
                        <li>
                            <a href="/">Carrier</a>
                        </li>
                        <li>
                            <a href="/">Listing</a>
                        </li>
                        <li>
                            <a href="/">Registration</a>
                        </li>
                    </ul>
                </Col>
                <Col md={2} className={styles.linkCol}>
                    <ul>
                        <li>
                            <p>
                                <strong>Business</strong>
                            </p>
                        </li>
                        <li>
                            <a href="/">Policy</a>
                        </li>
                        <li>
                            <a href="/">Terms</a>
                        </li>
                        <li>
                            <a href="/">Payment</a>
                        </li>
                        <li>
                            <a href="/">Subscription</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <div className={styles.socialWrapper}>
                    <a href="/">
                        <img
                            src="https://img.icons8.com/ios-filled/48/000000/linkedin.png"
                            alt="in"
                        />
                    </a>
                    <a href="/">
                        <img
                            src="https://img.icons8.com/ios-filled/48/000000/facebook--v1.png"
                            alt="fb"
                        />
                    </a>
                    <a href="/">
                        <img
                            src="https://img.icons8.com/ios-filled/48/000000/email-open.png"
                            alt="email"
                        />
                    </a>
                    <a href="/">
                        <img
                            src="https://img.icons8.com/ios-filled/48/000000/imessage.png"
                            alt="chat"
                        />
                    </a>
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
