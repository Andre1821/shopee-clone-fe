import { Outlet, Link } from 'react-router-dom'
import './style/Login.css'

const Register = () => {
    return (
        <>  
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card " style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center custom-card">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                        </div>
                                        <Link to='/login' className="btn btn-outline-light btn-lg px-5" type="submit">Submit</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </section>
        </>
    )
}

export default Register
