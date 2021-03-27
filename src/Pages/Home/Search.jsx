import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Search.module.css';

const Search = () => (
    <Container className={styles.searchContainer}>
        <div className={styles.searchHeader}>
            <h2>Search for current jobs</h2>
        </div>
        <form action="" method="post">
            <div className={styles.inputsWrapper}>
                <input type="text" placeholder="Pickup Location" name="" id="" />
                <input type="text" placeholder="Drop Location" name="" id="" />
                <input className={styles.btnPrimary} type="submit" value="Search" />
            </div>
        </form>
    </Container>
);

export default Search;
