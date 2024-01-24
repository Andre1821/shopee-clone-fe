import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrementQuantity, incrementQuantity, removeForCheckout, removeFromCart, restoreCart } from "./dashboard/redux/CartSlice"
import { Outlet, Link } from 'react-router-dom'


const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items)

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cartItems"))
        if (savedCart) {
            dispatch(restoreCart(savedCart))
        }
    }, [dispatch])

    const calculateSubtotal = (item) => {
        return item.price * item.quantity
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0)
    }

    const handleIncrement = (item) => {
        dispatch(incrementQuantity({ id: item.id }))
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }

    const handleDecrement = (item) => {
        dispatch(decrementQuantity({ id: item.id }))
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }

    const handleRemove = (item) => {
        dispatch(removeFromCart({ id: item.id }))

        const items = JSON.parse(localStorage.getItem("cartItems")) || []

        const itemIdx = items.findIndex((cartItem) => cartItem.id === item.id)
        if (itemIdx !== -1) {
            items.splice(itemIdx,1)
            localStorage.setItem("cartItems", JSON.stringify(items))
        }
    }

    const handleChecout = () => {
        dispatch(removeForCheckout())
        localStorage.removeItem("cartItems")
    }

    return (
        <>
            <div>
                <Link to='/' className="btn btn-primary" style={{ width: '90px', margin: '10px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16" style={{ marginRight: '10px' }}>
                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                    </svg>
                    Back
                </Link>
            </div>
            <div className="container mt-5">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <table className="table" key={item.id}>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '250px' }}>
                                            <img src={item.img} alt={item.name} style={{ maxWidth: '130px' }} />
                                        </td>
                                        <td style={{ width: '250px' }}>
                                            <span className="mx-2">{item.name}</span>
                                        </td>
                                        <td style={{ width: '250px' }}>
                                            <button className="btn btn-primary mx-2" onClick={() => handleDecrement(item)}>
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button className="btn btn-primary mx-2" onClick={() => handleIncrement(item)}>
                                                +
                                            </button>
                                        </td>
                                        <td style={{ width: '250px' }}>
                                            <span className="mx-2 text-end">Rp {calculateSubtotal(item)}</span>
                                        </td>
                                        <td style={{ width: '250px' }}>
                                            <button className="btn btn-danger" onClick={() => handleRemove(item)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ))}
                        <div className="container text-end">
                            <span style={{ fontWeight: 'bold' }}>Total : Rp {calculateTotal()}</span>
                            <Link to='/' className="btn btn-success" onClick={() => handleChecout()} style={{ margin: '0 160px 0 20px' }}>Checkout</Link>
                        </div>
                    </div>
                )}
                <Outlet />
            </div>
        </>
    )
}

export default Cart