import {
    faCheckCircle,
    // eslint-disable-next-line prettier/prettier
    faFileInvoiceDollar, faShieldAlt,

    // eslint-disable-next-line prettier/prettier
    faShippingFast
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Features.module.css';

const Features = () => (
    <Container fluid className={styles.featuresContainer}>
        <div id={styles.webVersion}>
            <Row className={styles.features}>
                <Col md={3} className={styles.statCol}>
                    <FontAwesomeIcon size="3x" style={{ color: '#27363B' }} icon={faShippingFast} />
                    <h6>
                        Fast <br /> Delivery
                    </h6>
                </Col>
                <Col md={3} className={styles.statCol}>
                    <FontAwesomeIcon size="3x" style={{ color: '#27363B' }} icon={faShieldAlt} />
                    <h6>
                        Well <br /> Secured
                    </h6>
                </Col>
                <Col md={3} className={styles.statCol}>
                    <FontAwesomeIcon size="3x" style={{ color: '#27363B' }} icon={faCheckCircle} />
                    <h6>
                        We <br /> Guaranty
                    </h6>
                </Col>
                <Col md={3} className={styles.statCol}>
                    <FontAwesomeIcon
                        size="3x"
                        style={{ color: '#27363B' }}
                        icon={faFileInvoiceDollar}
                    />
                    <h6>
                        Easy <br /> Payments
                    </h6>
                </Col>
            </Row>
        </div>
        <div className={styles.mobileVersion}>
            <Row className={styles.mobRow}>
                <Col md={6} className={styles.mobCol}>
                    <div>
                        <FontAwesomeIcon
                            size="3x"
                            style={{ color: '#27363B' }}
                            icon={faShippingFast}
                        />
                        <h6>
                            Fast <br /> Delivery
                        </h6>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            size="3x"
                            style={{ color: '#27363B' }}
                            icon={faShieldAlt}
                        />
                        <h6>
                            Well <br /> Secured
                        </h6>
                    </div>
                </Col>
                <Col md={6} className={styles.mobCol}>
                    <div>
                        <FontAwesomeIcon
                            size="3x"
                            style={{ color: '#27363B' }}
                            icon={faCheckCircle}
                        />
                        <h6>
                            We <br /> Guaranty
                        </h6>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            size="3x"
                            style={{ color: '#27363B' }}
                            icon={faFileInvoiceDollar}
                        />
                        <h6>
                            Easy <br /> Payments
                        </h6>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
);

export default Features;
