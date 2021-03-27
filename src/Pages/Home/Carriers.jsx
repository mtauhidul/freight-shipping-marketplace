import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CarriersImg from '../../Assets/carrier.jpg';
import styles from './Carriers.module.css';

const Carriers = () => (
    <Container fluid className={styles.carriersContainer}>
        <Container className={styles.wrapper}>
            <Row>
                <Col md={6}>
                    <div className={styles.imgWrapper}>
                        <img src={CarriersImg} alt="" />
                    </div>
                </Col>
                <Col md={6}>
                    <h1>Find the right carrier for your moving job</h1>
                    <br />
                    <p>
                        Once posting your moving job with us, our registered and verified
                        transporters will post proposals with various price ranges from which you
                        can choose to do your transporting job. After that the payment can be on
                        site or within your account. Also our website uses escrow, so your payment
                        is secure.
                    </p>
                    <br />
                    <Button className={styles.btnPrimary} variant="primary">
                        Know More
                    </Button>
                </Col>
            </Row>
        </Container>
    </Container>
);

export default Carriers;
