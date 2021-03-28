import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Register.module.css';

const Register = () => {
    function toggleSignup() {
        if (document.getElementById('loginToggle') && document.getElementById('loginToggle')) {
            document.getElementById('loginToggle').style.backgroundColor = '#fff';
            document.getElementById('loginToggle').style.color = '#222';
            document.getElementById('signupToggle').style.backgroundColor = '#57b846';
            document.getElementById('signupToggle').style.color = '#fff';
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('signupForm').style.display = 'block';
        }
    }

    if (document.getElementById('loginToggle') && document.getElementById('loginToggle')) {
        document.getElementById('loginToggle').style.backgroundColor = '#fff';
        document.getElementById('loginToggle').style.color = '#222';
        document.getElementById('signupToggle').style.backgroundColor = '#57b846';
        document.getElementById('signupToggle').style.color = '#fff';
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
    }
    function toggleLogin() {
        document.getElementById('loginToggle').style.backgroundColor = '#57B846';
        document.getElementById('loginToggle').style.color = '#fff';
        document.getElementById('signupToggle').style.backgroundColor = '#fff';
        document.getElementById('signupToggle').style.color = '#222';
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }

    return (
        <Container fluid>
            <div className={styles.formContainer}>
                <div className={styles.formModal}>
                    <div className={styles.formToggle}>
                        <button type="submit" id="loginToggle" onClick={toggleLogin()}>
                            log in
                        </button>
                        <button type="submit" id="signupToggle" onClick={toggleSignup()}>
                            sign up
                        </button>
                    </div>
                    <div id={styles.loginForm}>
                        <form>
                            <input type="text" placeholder="Enter email or username" />
                            <input type="password" placeholder="Enter password" />
                            <button type="submit" className={[styles.btn, styles.login].join(' ')}>
                                login
                            </button>
                            <p>
                                <a href="/">Forgotten account</a>
                            </p>
                            <hr />
                            <button
                                type="submit"
                                className={[styles.btn, styles.boxSdEffect].join(' ')}
                            >
                                {' '}
                                <i
                                    className={[styles.fa, styles.faGoogle, styles.faLg].join(' ')}
                                    aria-hidden="true"
                                />{' '}
                                sign in with google
                            </button>
                            <button
                                type="submit"
                                className={[styles.btn, styles.boxSdEffect].join(' ')}
                            >
                                {' '}
                                <i className="fa fa-linkedin fa-lg" aria-hidden="true" /> sign in
                                with linkedin
                            </button>
                            <button
                                type="submit"
                                className={[styles.btn, styles.boxSdEffect].join(' ')}
                            >
                                {' '}
                                <i className="fa fa-windows fa-lg" aria-hidden="true" /> sign in
                                with microsoft
                            </button>
                        </form>
                    </div>
                    <div id={styles.signupForm}>
                        <form>
                            <input type="email" placeholder="Enter your email" />
                            <input type="text" placeholder="Choose username" />
                            <input type="password" placeholder="Create password" />
                            <button type="submit" className={[styles.btn, styles.signup].join(' ')}>
                                create account
                            </button>
                            <p>
                                Clicking <strong>create account</strong> means that you are agree to
                                our <a href="/">terms of services</a>.
                            </p>
                            <hr />
                            <button
                                type="submit"
                                className={[styles.btn, styles.boxSdEffect].join(' ')}
                            >
                                {' '}
                                <i className="fa fa-google fa-lg" aria-hidden="true" /> sign up with
                                google
                            </button>
                            <button
                                type="submit"
                                className={[styles.btn, styles.boxSdEffect].join(' ')}
                            >
                                {' '}
                                <i className="fa fa-linkedin fa-lg" aria-hidden="true" /> sign up
                                with linkedin
                            </button>
                            <button
                                type="submit"
                                className={[styles.btn, styles.boxSdEffect].join(' ')}
                            >
                                {' '}
                                <i className="fa fa-windows fa-lg" aria-hidden="true" /> sign up
                                with microsoft
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;
