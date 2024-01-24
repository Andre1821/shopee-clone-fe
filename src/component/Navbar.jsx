import { Outlet, Link, useNavigate } from 'react-router-dom'
import './style/Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeForCheckout } from './dashboard/redux/CartSlice'

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items)
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem("Data")) || {}
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem("Data")
        localStorage.removeItem("DataUser")
        localStorage.removeItem("cartItems")
        localStorage.removeItem("stores")
        dispatch(removeForCheckout())
        navigate("/login")
    }

    const handleAddStore = () => {
        navigate("/pageStore")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top custom-navbar" id='nav'>
                <div className="container-fluid mx-3">
                    <Link to='/' className="navbar-brand" href="#">ShopeeMart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <div className='custom-search custom-btn'>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ border: "none" }} />
                                <button className="btn" type="submit">Search</button>
                            </form>
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {token.token ? (
                                <li className="nav-item dropdown custom-btn custom-dropdown">
                                    <button className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><p className="dropdown-item">{token.username}</p></li>
                                        <li><p className="dropdown-item">{token.role}</p></li>
                                        <li><button className="nav-link" onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link to='/register' className="nav-link">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                            <Link to='/registerAdmin' className="nav-link">Register Admin</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to='/login' className="nav-link">Login</Link>
                                    </li>
                                </>
                            )}
                            <li className="nav-item" >
                                {token.token ? (
                                    <Link to='/cart' className="nav-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                        </svg>
                                        {totalQuantity > 0 && <span className="top-0 start-99 translate-middle badge rounded-circle text-bg-light">{totalQuantity}</span>}
                                    </Link>
                                ) : (
                                    <span className="nav-link" onClick={() => navigate("/login")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                        </svg>
                                        {totalQuantity > 0 && <span className="top-0 start-99 translate-middle badge rounded-circle text-bg-light">{totalQuantity}</span>}
                                    </span>
                                )}
                            </li>

                            <li className="nav-item" >
                                {token.token && token.role === "ROLE_ADMIN" ? (
                                    <div className="nav-link" onClick={handleAddStore}>Add Store</div>
                                ) : (
                                    null
                                )}
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar