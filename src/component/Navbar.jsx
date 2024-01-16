import { Outlet, Link } from 'react-router-dom'
import './style/Navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items)
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top custom-navbar" id='nav'>
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" href="#">ShopeeMart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <div className='custom-search'>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ border: "none" }} />
                                <button className="btn" type="submit">Search</button>
                            </form>
                        </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/login' className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/register' className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cart' className="nav-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                    </svg>
                                    {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
                                </Link>
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