import { useNavigate } from 'react-router-dom'
import './style/Login.css'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [mobilePhone, setmobilePhone] = useState('')
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleSubmit = async (e) => {
        if (!username.trim() || !password.trim() || !name.trim() || !address.trim() || !mobilePhone.trim() || !email.trim()) {
            setErrorMessage("Please fill in all fields")
            return
        }

        try {
            setLoading(true)
            e.preventDefault()
            const registerCustomer = await axios.post('http://localhost:8080/api/auth/register/customer', {
                username,
                password,
                name,
                address,
                mobilePhone,
                email,
            })

            const dataCustomer = registerCustomer.data.data
            localStorage.setItem("DataUser", JSON.stringify(dataCustomer))

            setLoading(false)
            toast.success('Registration successful', {
                position: 'top-center',
                autoClose: 2000,
            })

            navigate("/login")
            setUsername("")
            setPassword("")
            setName("")
            setAddress("")
            setmobilePhone("")
            setEmail("")
            setErrorMessage("")
        } catch (err) {
            console.log("Error", err)
            setErrorMessage("Registration failed. Please try again.");
        }
    }

    return (
        <>
            <ToastContainer />
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card " style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center custom-card">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="username">Username</label>
                                            <input
                                                type="text"
                                                id="username"
                                                className={`form-control form-control-lg ${errorMessage && "is-invalid"}`}
                                                placeholder='Username'
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ fontSize: "20px", color: "red" }}
                                            >
                                                {errorMessage}
                                            </div>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                className={`form-control form-control-lg ${errorMessage && "is-invalid"}`}
                                                placeholder='Password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ fontSize: "20px", color: "red" }}
                                            >
                                                {errorMessage}
                                            </div>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className={`form-control form-control-lg ${errorMessage && "is-invalid"}`}
                                                placeholder='Name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ fontSize: "20px", color: "red" }}
                                            >
                                                {errorMessage}
                                            </div>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="address">Address</label>
                                            <input
                                                type="text"
                                                id="address"
                                                className={`form-control form-control-lg ${errorMessage && "is-invalid"}`}
                                                placeholder='Address'
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ fontSize: "20px", color: "red" }}
                                            >
                                                {errorMessage}
                                            </div>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="mobilePhone">Phone Number</label>
                                            <input
                                                type="text"
                                                id="mobilePhone"
                                                className={`form-control form-control-lg ${errorMessage && "is-invalid"}`}
                                                placeholder='Mobile Phone'
                                                value={mobilePhone}
                                                onChange={(e) => setmobilePhone(e.target.value)}
                                                required
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ fontSize: "20px", color: "red" }}
                                            >
                                                {errorMessage}
                                            </div>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className={`form-control form-control-lg ${errorMessage && "is-invalid"}`}
                                                placeholder='Email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <div
                                                className="invalid-feedback"
                                                style={{ fontSize: "20px", color: "red" }}
                                            >
                                                {errorMessage}
                                            </div>
                                        </div>
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>
                                            {loading ? 'Loading....' : 'Submit'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
