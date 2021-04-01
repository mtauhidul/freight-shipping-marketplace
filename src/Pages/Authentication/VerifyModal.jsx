import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const VerifyModal = (props) => {
    const { onHide, setCode } = props;
    const [vCode, setVCode] = useState();
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <form onSubmit={setCode(vCode)}>
                    <input type="number" onChange={setVCode} name="" id="" />
                    <input type="submit" value="Submit" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default VerifyModal;
