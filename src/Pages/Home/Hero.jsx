import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HeroImg from '../../Assets/bg-13.jpg';
import styles from './Hero.module.css';

const Hero = () => (
    <Container fluid className={styles.heroContainer}>
        <Container fluid="md" className={styles.heroWrapper}>
            <Row>
                <Col sm={6}>
                    <div>
                        <p className={styles.heroLine}>Freight Shipping</p>
                        <h1 className={styles.heroText}>
                            Find your shipping carriers and
                            <br />
                            <span>get your goods delivered</span>
                        </h1>
                    </div>
                    <div className={styles.btnWrapper}>
                        <Button className={styles.btnPrimary} variant="primary">
                            POST A NEW JOB
                        </Button>
                        <Button className={styles.btnOutPrimary} variant="outline-primary">
                            BECOME A CARRIER
                        </Button>
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={HeroImg} alt="" />
                </Col>
            </Row>
        </Container>
    </Container>
);

export default Hero;
