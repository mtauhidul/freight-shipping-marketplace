import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Categories.module.css';

const Categories = () => (
    <Container className={styles.catContainer}>
        <div>
            <h2>Browse shipping categories</h2>
        </div>
        <Row className={styles.listRow}>
            <Col md={2} className={styles.listCol}>
                <ul>
                    <li>
                        <li>
                            <h5>
                                <a href="/">Automobiles</a>
                            </h5>
                        </li>
                        <li>
                            <a href="/">ATV</a>
                        </li>
                        <li>
                            <a href="/">Cars</a>
                        </li>
                        <li>
                            <a href="/">Motorcycles</a>
                        </li>
                        <li>
                            <a href="/">Trailers</a>
                        </li>
                        <li>
                            <a href="/">Trucks</a>
                        </li>
                    </li>
                </ul>
            </Col>
            <Col md={2} className={styles.listCol}>
                <ul>
                    <li>
                        <li>
                            <h5>
                                <a href="/">Big items</a>
                            </h5>
                        </li>
                        <li>
                            <a href="/">Cargo Boxes</a>
                        </li>
                        <li>
                            <a href="/">Large Pallets</a>
                        </li>
                        <li>
                            <a href="/">Large Trash</a>
                        </li>
                        <li>
                            <a href="/">Oversized Items</a>
                        </li>
                        <li>
                            <a href="/">Large Freights</a>
                        </li>
                    </li>
                </ul>
            </Col>
            <Col md={2} className={styles.listCol}>
                <ul>
                    <li>
                        <li>
                            <h5>
                                <a href="/">Furniture</a>
                            </h5>
                        </li>
                        <li>
                            <a href="/">Bedroom</a>
                        </li>
                        <li>
                            <a href="/">Kitchen</a>
                        </li>
                        <li>
                            <a href="/">Living Room</a>
                        </li>
                        <li>
                            <a href="/">Other</a>
                        </li>
                        <li>
                            <a href="/">Tables</a>
                        </li>
                    </li>
                </ul>
            </Col>
            <Col md={2} className={styles.listCol}>
                <ul>
                    <li>
                        <li>
                            <h5>
                                <a href="/">Pets</a>
                            </h5>
                        </li>
                        <li>
                            <a href="/">Big Pets</a>
                        </li>
                        <li>
                            <a href="/">Dogs and Cats</a>
                        </li>
                        <li>
                            <a href="/">Farm Pets</a>
                        </li>
                        <li>
                            <a href="/">Small Pets</a>
                        </li>
                        <li>
                            <a href="/">Special Pets</a>
                        </li>
                    </li>
                </ul>
            </Col>
            <Col md={2} className={styles.listCol}>
                <ul>
                    <li>
                        <li>
                            <h5>
                                <a href="/">House Items</a>
                            </h5>
                        </li>
                        <li>
                            <a href="/">Dryer</a>
                        </li>
                        <li>
                            <a href="/">Fridge</a>
                        </li>
                        <li>
                            <a href="/">Tool Boxes</a>
                        </li>
                        <li>
                            <a href="/">Washing Machine</a>
                        </li>
                        <li>
                            <a href="/">Other Home Items</a>
                        </li>
                    </li>
                </ul>
            </Col>

            <Col md={2} className={styles.listCol}>
                <ul>
                    <li>
                        <li>
                            <h5>
                                <a href="/">Heavy Machinery</a>
                            </h5>
                        </li>
                        <li>
                            <a href="/">Agri Machinery</a>
                        </li>
                        <li>
                            <a href="/">Big Trucks</a>
                        </li>
                        <li>
                            <a href="/">Construction</a>
                        </li>
                        <li>
                            <a href="/">Other Heavy Items</a>
                        </li>
                        <li>
                            <a href="/">Trucks</a>
                        </li>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
);

export default Categories;
