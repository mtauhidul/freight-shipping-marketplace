import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from './Authentication.module.css';
import firebaseConfig from './firebase.Config';

const Authentication = () => {
    const [value, setValue] = useState();

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        window.appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
        });
        const { appVerifier } = window;
        firebase
            .auth()
            .signInWithPhoneNumber(value, appVerifier)
            .then((confirmationResult) => {
                console.log('Success');
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
            })
            .catch((error) => {
                console.log(`Error:${error.message}`);
            });
    };
    const onVerifyCodeSubmit = (event) => {
        event.preventDefault();
        const verifyCode = document.getElementById('verifyCode').value;
        console.log(verifyCode);
        const verificationId = `${verifyCode}`;
        window.confirmationResult
            .confirm(verificationId)
            .then((result) => {
                alert('User signed in successfully.');
                const { user } = result;
                user.getIdToken().then((idToken) => {
                    console.log(idToken);
                });
            })
            .catch((error) => {
                // User couldn't sign in (bad verification code?)
                console.error('Error while checking the verification code', error);
                window.alert(
                    `Error while checking the verification code:\n\n${error.code}\n\n${error.message}`
                );
            });
    };

    return (
        <Container fluid>
            <div id="recaptcha-container" />
            <div className={styles.formContainer}>
                <h3>Please verify your mobile number</h3>
                <br />
                <br />
                <form>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                    />
                    <div className={styles.borderDiv} />
                    <br />
                    <input
                        id="recaptcha-container"
                        className={styles.btnSubmit}
                        type="submit"
                        value="Continue"
                        onClick={(event) => handleSignUp(event)}
                    />
                </form>
            </div>
            <div id={styles.verifyCodeInput}>
                <h4>Enter verification code</h4>
                <form onSubmit={(event) => onVerifyCodeSubmit(event)}>
                    <input type="number" name="verifyCode" id="verifyCode" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </Container>
    );
};

export default Authentication;
