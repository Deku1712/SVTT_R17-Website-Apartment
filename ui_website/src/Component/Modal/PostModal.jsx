import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function PostModal(props) {
    

    const handleClose = () => props.setShow(false);
    const handleShow = () => props.setShow(true);
  return (
    
    

    <Modal show={props.show} onHide={handleClose} animation={false} className=' d-flex align-items-center justify-content-center'>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  
  )
}
