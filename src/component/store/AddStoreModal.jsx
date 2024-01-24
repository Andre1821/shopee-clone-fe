import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function AddStoreModal({ show, handleClose, handleCreateStore }) {
    const [noSiup, setNoSiup] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [mobilePhone, setMobilePhone] = useState('')

    const handleSubmit = () => {
        const newStore = {
            noSiup, name, address, mobilePhone,
        }

        handleCreateStore(newStore)

        setNoSiup('')
        setName('')
        setAddress('')
        setMobilePhone('')

        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Store</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="noSiup">
                            <Form.Label>No Siup</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter No Siup"
                                value={noSiup}
                                onChange={(e) => setNoSiup(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="mobilePhone">
                            <Form.Label>Mobile Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Mobile Phone"
                                value={mobilePhone}
                                onChange={(e) => setMobilePhone(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Create Store
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddStoreModal