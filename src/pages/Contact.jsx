import { Button, Modal } from 'react-bootstrap'
import { useState } from "react";
import Form from "../components/Form";
const Contact = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <h3>This is contact</h3>
      <Button variant="primary" onClick={handleShow}>
        MODAL
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form setShow={setShow}/></Modal.Body>
      </Modal>

      
    </>
  );
};

export default Contact;
