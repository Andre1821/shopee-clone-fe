import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from "react-redux"
import { addToCart } from "./redux/CartSlice"

const DetailProduct = ({ product, show, handleClose }) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ ...product, quantity })) 
            const existingItems = JSON.parse(localStorage.getItem("cartItems")) || []

            const existingItem =  existingItems.find(item => item.id === product.id)

            if(existingItem){
                existingItem.quantity += quantity
            } else {
                existingItems.push({...product, quantity})
            }

            localStorage.setItem("cartItems", JSON.stringify(existingItems))
            handleClose()
        }
    }

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }

    const handleDecrement = () => {
        if (quantity > 1)
            setQuantity((prevQuantity) => prevQuantity - 1)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>
                    {product?.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={product?.img} alt={product?.name} style={{ maxWidth: '100%' }} />
                <p>{product?.description}</p>
                <p>Rp {product?.price}</p>
                <div>
                    <label>Quantity : </label>
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-primary" onClick={handleDecrement}>
                            -
                        </button>
                        <span className="mx-2">{quantity}</span>
                        <button type="button" className="btn btn-primary" onClick={handleIncrement}>
                            +
                        </button>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddToCart}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailProduct