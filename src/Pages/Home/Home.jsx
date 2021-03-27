import React from 'react';
import { Container } from 'react-bootstrap';
import Carriers from './Carriers';
import Categories from './Categories';
import Features from './Features';
import Hero from './Hero';
import styles from './Home.module.css';
import Method from './Method';
import Search from './Search';
import Shippers from './Shippers';
import Statistics from './Statistics';

const Home = () => (
    <Container fluid className={styles.homeContainer}>
        <Hero />
        <Search />
        <Method />
        <Statistics />
        <Categories />
        <Shippers />
        <Carriers />
        <Features />
    </Container>
);

export default Home;
