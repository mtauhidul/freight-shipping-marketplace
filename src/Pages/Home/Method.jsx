import { faBoxOpen, faTruck, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Method.module.css';

const Method = () => (
    <Container className={styles.methodContainer}>
        <div className={styles.card}>
            <FontAwesomeIcon size="3x" style={{ color: '#4BADE1' }} icon={faBoxOpen} />
            <h4>Post Your Job</h4>
            <p>You can easily post your transporting jobs for verified transporters to bid on.</p>
        </div>
        <div className={styles.card}>
            <FontAwesomeIcon size="3x" style={{ color: '#4BADE1' }} icon={faTruck} />
            <h4>Get Quotes</h4>
            <p>
                After posting the job, wait for the best possible proposals in order to get the best
                service Pick Transporter
            </p>
        </div>
        <div className={styles.card}>
            <FontAwesomeIcon size="3x" style={{ color: '#4BADE1' }} icon={faUsers} />
            <h4>Pick Transporter</h4>
            <p>Pick your favourite transporter based on budget, previous work and reviews</p>
        </div>
    </Container>
);

export default Method;
