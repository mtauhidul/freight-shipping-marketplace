import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const Categories = () => (
    <Container className={styles.catContainer}>
        <div>
            <h2>Browse shipping categories</h2>
        </div>
        <Row className={styles.listRow}>
            <Col md={2} className={styles.listCol}>
                <div>
                    {' '}
                    <ul>
                        <li>
                            <li>
                                <h5>
                                    <Link to="/">Automobiles</Link>
                                </h5>
                            </li>
                            <li>
                                <Link to="/">ATV</Link>
                            </li>
                            <li>
                                <Link to="/">Cars</Link>
                            </li>
                            <li>
                                <Link to="/">Motorcycles</Link>
                            </li>
                            <li>
                                <Link to="/">Trailers</Link>
                            </li>
                            <li>
                                <Link to="/">Trucks</Link>
                            </li>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col md={2} className={styles.listCol}>
                <div>
                    {' '}
                    <ul>
                        <li>
                            <li>
                                <h5>
                                    <Link to="/">Big items</Link>
                                </h5>
                            </li>
                            <li>
                                <Link to="/">Cargo Boxes</Link>
                            </li>
                            <li>
                                <Link to="/">Large Pallets</Link>
                            </li>
                            <li>
                                <Link to="/">Large Trash</Link>
                            </li>
                            <li>
                                <Link to="/">Oversized Items</Link>
                            </li>
                            <li>
                                <Link to="/">Large Freights</Link>
                            </li>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col md={2} className={styles.listCol}>
                <div>
                    {' '}
                    <ul>
                        <li>
                            <li>
                                <h5>
                                    <Link to="/">Furniture</Link>
                                </h5>
                            </li>
                            <li>
                                <Link to="/">Bedroom</Link>
                            </li>
                            <li>
                                <Link to="/">Kitchen</Link>
                            </li>
                            <li>
                                <Link to="/">Living Room</Link>
                            </li>
                            <li>
                                <Link to="/">Other</Link>
                            </li>
                            <li>
                                <Link to="/">Tables</Link>
                            </li>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col md={2} className={styles.listCol}>
                <div>
                    {' '}
                    <ul>
                        <li>
                            <li>
                                <h5>
                                    <Link to="/">Pets</Link>
                                </h5>
                            </li>
                            <li>
                                <Link to="/">Big Pets</Link>
                            </li>
                            <li>
                                <Link to="/">Dogs and Cats</Link>
                            </li>
                            <li>
                                <Link to="/">Farm Pets</Link>
                            </li>
                            <li>
                                <Link to="/">Small Pets</Link>
                            </li>
                            <li>
                                <Link to="/">Special Pets</Link>
                            </li>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col md={2} className={styles.listCol}>
                <div>
                    {' '}
                    <ul>
                        <li>
                            <li>
                                <h5>
                                    <Link to="/">House Items</Link>
                                </h5>
                            </li>
                            <li>
                                <Link to="/">Dryer</Link>
                            </li>
                            <li>
                                <Link to="/">Fridge</Link>
                            </li>
                            <li>
                                <Link to="/">Tool Boxes</Link>
                            </li>
                            <li>
                                <Link to="/">Washing Machine</Link>
                            </li>
                            <li>
                                <Link to="/">Other Home Items</Link>
                            </li>
                        </li>
                    </ul>
                </div>
            </Col>

            <Col md={2} className={styles.listCol}>
                <div>
                    {' '}
                    <ul>
                        <li>
                            <li>
                                <h5>
                                    <Link to="/">Heavy Machinery</Link>
                                </h5>
                            </li>
                            <li>
                                <Link to="/">Agri Machinery</Link>
                            </li>
                            <li>
                                <Link to="/">Big Trucks</Link>
                            </li>
                            <li>
                                <Link to="/">Construction</Link>
                            </li>
                            <li>
                                <Link to="/">Other Heavy Items</Link>
                            </li>
                            <li>
                                <Link to="/">Trucks</Link>
                            </li>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Categories;
