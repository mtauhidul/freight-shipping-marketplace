import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Statistics.module.css';

const Statistics = () => {
    document.addEventListener('DOMContentLoaded', () => {
        function counter(id, start, end, duration) {
            const obj = document.getElementById(id);
            let current = start;
            const range = end - start;
            const increment = end > start ? 1 : -1;
            const step = Math.abs(Math.floor(duration / range));
            const timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
        }
        counter('count1', 0, 300, 3000);
        counter('count2', 100, 500, 2500);
        counter('count3', 0, 450, 3000);
    });

    return (
        <Container fluid className={styles.statisticsContainer}>
            <Row className={styles.statistics}>
                <Col md={4} className={styles.statCol}>
                    <span id="count1" className="display-4" />
                    <h5>Shippers</h5>
                </Col>
                <Col md={4} className={styles.statCol}>
                    <span id="count2" className="display-4" />
                    <h5>Carriers</h5>
                </Col>
                <Col md={4} className={styles.statCol}>
                    <span id="count3" className="display-4" />
                    <h5>Delivered</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Statistics;
