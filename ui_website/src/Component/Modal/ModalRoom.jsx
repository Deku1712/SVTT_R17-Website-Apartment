import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormProvider, useForm } from 'react-hook-form'
import { Form } from '../../Pages/Apartment/Form';
export default function ModalRoom(props) {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add Room 
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
      <FormProvider>
        <Form typeadd = 'addroom' apartment = {props.apartment}/>
      </FormProvider>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}
