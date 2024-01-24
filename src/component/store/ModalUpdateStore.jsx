import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'

function ModalUpdateStore({ show, handleClose, handleUpdateStore, initialData }) {
    const [formData, setFormData] = useState({
        id: '',
        noSiup: '',
        name: '',
        address: '',
        mobilePhone: '',
    })

    useEffect(() => {
        setFormData({
            id: initialData?.id || '',
            noSiup: initialData?.noSiup || '',
            name: initialData?.storeName || '',
            address: initialData?.address || '',
            mobilePhone: initialData?.phone || '',
        })
    }, [initialData])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.put(`http://localhost:8080/api/auth/store`, formData)
            console.log('Updated Store: ', response.data)

            handleUpdateStore(response.data)

            handleClose()
        } catch (error) {
            console.error('Error updating store: ', error)
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Store</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNoSiup">
                        <Form.Label>No Siup</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter No Siup"
                            name="noSiup"
                            value={formData.noSiup}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formMobilePhone">
                        <Form.Label>Mobile Phone</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Mobile Phone"
                            name="mobilePhone"
                            value={formData.mobilePhone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
                        Update
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default ModalUpdateStore
